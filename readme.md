## NodeJS Express Server CLI Interface

* Yes, this is a hack, but sometimes it is quite useful.

* Uses NodeJS Express Server's POST method to interface with Bash/PowerShell CLI commands & scripts

### Setup/Start NodeJS Express Server

```
npm install
npm start
```

* Send a JSON Request Object with the cmd paramters

	* Content-Type: application/json

```
{
    "cmd": "test_command_string"
}
```

* By default, you can POST at: [http://0.0.0.0:8080/node/cli](http://0.0.0.0:8080/node/cli)
