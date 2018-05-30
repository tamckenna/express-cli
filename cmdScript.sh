#!/bin/bash
export inputCmd=$1

#Define Global Script Functions
timestamp() {
    echo $(date +"%Y-%m-%d %H:%M:%S")
}
export -f timestamp

logger() {
    echo "$(timestamp) ${1}"
    echo "$(timestamp) ${1}" >> output.log
}
export -f logger

run_commands() {
    logger "Running Bash Commands now..."
    #Run Bash Commands Here!
    #
}
export -f run_commands

#Begin node-cli commands here
logger "Node Bash Script is starting up now..."
logger "Input Command: ${inputCmd}"

run_commands

logger "Node Bash Script has finished!"

