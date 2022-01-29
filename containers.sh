#!bin/bash

docker rm $(docker ps -a -f status=exited -q)
docker rmi $(docker images -q -f dangling=true)

# # # Delete all 'untagged/dangling' (<none>) images, Those are used for Docker caching mechanism.
docker images -q --no-trunc --filter dangling=true | xargs --no-run-if-empty docker rmi


imgs=$(docker images | awk '/<none>/ { print $3 }')
if [ "${imgs}" != "" ]; then
   docker rmi ${imgs}
else
   echo "No images to remove"
fi

# Remove all the dangling images
DANGLING_IMAGES=$(docker images -qf "dangling=true")
if [[ -n $DANGLING_IMAGES ]]; then
    docker rmi "$DANGLING_IMAGES"
fi

procs=$(docker ps -a -q --no-trunc)
if [ "${procs}" != "" ]; then
   docker rm ${procs}
else
   echo "No processes to purge"
fi


STALLED_IMAGES=$(docker images  | awk -v proj=$CI_PROJECT_NAME '$0 ~ proj || $1 ~ /none/{print $3}')
if ! test -z "$STALLED_IMAGES";
   then
      docker rmi -f $STALLED_IMAGES
fi












