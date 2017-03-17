Install
```
npm install
```

Test
```
npm test
```

Start Server
```
npm start
```

Write a message to a file called `user-data.txt`:

```
curl -X POST -H "Content-Type: application/json" -d '{
	"message": "Hi, Bressain!"
}' "http://localhost:3456/"
```

Read the message from the file:

```
curl -X GET -H "Content-Type: application/json" "http://localhost:3456/"
```
