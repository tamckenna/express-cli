$inputCmd=$args[0]

function Get-TimeStamp {
    return "{0:yyyy-MM-dd} {0:HH:mm:ss}" -f (Get-Date)
}

function logger {
    $input=$args[0]
    echo "$(Get-TimeStamp) ${input}"
    echo "$(Get-TimeStamp) ${input}" >> output.log
}

function run_commands {
    logger "Running Bash Commands now..."
    #Run Powershell Commands Here! $inputCmd is the api input
    #
}

#Begin node-cli commands here
logger "Node Powershell Script is starting up now..."
logger "Input Command: ${inputCmd}"

run_commands

logger "Node Powershell Script has finished!"
