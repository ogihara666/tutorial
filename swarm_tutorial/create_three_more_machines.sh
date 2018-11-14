# worker machines作成

echo "======> Creating $workers worker machines...";

for node in $(seq 1 $workers);
do
        echo "======> Creating worker$node machine ...";
        docker-machine create -d virtualbox worker$node;
done

# 作成したすべてのmachnesのリスト
docker-machine ls