@echo off
echo Starting PostgreSQL...
net start postgresql-x64-14

echo Starting backend server...
cd G:\MyProjects\pharmacy-management-saas\pharmacy-backend
node server.js