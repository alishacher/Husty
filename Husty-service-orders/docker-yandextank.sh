#docker run --rm  --link husty-service-orders_node_1:targethost -v $(pwd):/var/loadtest -v $SSH_AUTH_SOCK:/ssh-agent -e SSH_AUTH_SOCK=/ssh-agent -v $HOME/.ssh:/root/.ssh -it direvius/yandex-tank

docker run --rm  --net host -v $(pwd):/var/loadtest -v $SSH_AUTH_SOCK:/ssh-agent -e SSH_AUTH_SOCK=/ssh-agent -v $HOME/.ssh:/root/.ssh -it direvius/yandex-tank