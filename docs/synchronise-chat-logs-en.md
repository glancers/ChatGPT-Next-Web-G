# Synchronize Chat Logs with UpStash
## Prerequisites
- GitHub account
- Your own ChatGPT-Next-Web server set up
- GitHub account
- Your own ChatGPT-Next-Web server set up
- [UpStash](https://upstash.com)
- Environment variables for UpStash integration

## Getting Started
1. Register for an UpStash account.
2. Create a database.

    ![Register and Login](./images/upstash-1.png)

    ![Create Database](./images/upstash-2.png)

    ![Select Server](./images/upstash-3.png)

3. Find the REST API and copy UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN. Be careful not to share your token with anyone else. Remember, these tokens allow access to your database, and sharing them can pose a security risk.

   ![Copy](./images/upstash-4.png)

4. Copy UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN into your synchronization configuration, then click **Check Availability**.

    ![Synchronize 1](./images/upstash-5.png)

    If everything is in order, you've successfully completed this step. If you encounter any issues with the synchronization process, please refer to the troubleshooting steps below:

    ![Sync Availability Check Completed](./images/upstash-6.png)

5. Success!

   ![Great job~!](./images/upstash-7.png)