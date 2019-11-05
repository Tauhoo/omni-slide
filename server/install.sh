sudo docker build -t omni-slide-server . && \
sudo docker run --name omni-slide-server --net=host \
-v $(readlink -f ./database):/usr/server/database \
-v $(readlink -f ./feature):/usr/server/feature \
-v $(readlink -f ./logs):/usr/server/logs \
-v $(readlink -f ./utilise):/usr/server/utiles \
-v $(readlink -f ./.env):/usr/server/.env \
-v $(readlink -f ./config.js):/usr/server/config.js \
-v $(readlink -f ./index.js):/usr/server/index.js \
omni-slide-server
