mysql -u root -p -e "CREATE DATABASE IF NOT EXISTS aleman;"
cd back
php artisan migrate:fresh --seed
pause
```