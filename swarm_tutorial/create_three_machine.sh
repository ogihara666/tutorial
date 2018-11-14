#!/bin/bash

manager=3
workers=3

echo "======> Creating $managers manager machine...";
for node in $(seq 1 $managers);
do
        echo "======> Creating manager $node machine...";
        docker-machine create -d virtualbox manager$node;
done