## NodeJS CLI Express Server Interface

* Uses the nodeJS express POST web server to interface bash cli commands & scripts

### Start Express POST API Server

```
npm install
npm start
```

* You can send a JSON Request Object with parameters

	* Content-Type: application/json

```
{
    "cmd": "test_command_string"
}
```

* By default you can hit api at: [http://localhost:8080/node/cli](http://localhost:8080/node/cli)
