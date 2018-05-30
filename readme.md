## NodeJS CLI Express Server Interface

* Uses NodeJS Express Server's POST method to interface with Bash CLI commands & scripts

### Setup/Start Express Server

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

* By default you can hit api at: [http://localhost:8080/node/cli](http://localhost:8080/node/cli)
