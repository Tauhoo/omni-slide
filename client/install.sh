sudo docker build -t omni-slide-client . && \
sudo docker run --name omni-slide-client --net=host \
-v $(readlink -f ./out):/etc/nginx/html \
-v $(readlink -f ./nginx):/etc/nginx/ \
-v $(readlink -f ./ssl):/etc/ssl/ \
kenko-client