## Requirements:
- Need to have installed mongodb CLI on localhost machine [MongoDB Database Tools](https://www.mongodb.com/docs/database-tools/)
- Need to have the database URI with read/write permissions

### To create dump from a remote MongoDB Database:

```bash
mongodump --uri "mongodb+srv://brizy_nextjs:nextjs_brizy_test@brizy.bhrbdoy.mongodb.net/?retryWrites=true&w=majority&appName=brizy" -o ./mongo-backup-$(date +%d-%m-%Y)
```

### To restore the remote database from local backup:

```bash
mongorestore --uri "mongodb+srv://brizy_nextjs:nextjs_brizy_test@brizy.bhrbdoy.mongodb.net/?retryWrites=true&w=majority&appName=brizy" ./mongo-backup/brizy
```
