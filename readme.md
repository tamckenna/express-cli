## NodeJS Express Server CLI Interface

* Uses NodeJS Express Server's POST method to interface with Bash CLI commands & scripts

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

* By default, you can POST at: [http://localhost:8080/node/cli](http://localhost:8080/node/cli)
