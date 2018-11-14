# swarm modeを初期化しmanagerを作成
echo "=======> Initializing first swarm manager"
docker-machine ssh manager1 "docker swarm init --listen-addr $(docker-machine ip manager) --advertise-addr $(docker-machine ip manager1)"