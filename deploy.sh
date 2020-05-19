echo "[+]Installing CMAT "
echo "[+]CMAT Directory: /var/www/cmat"

sudo apt-get update
sudo apt-get install -y build-essential libssl-dev libffi-dev python-dev python3-dev python3 python3-pip virtualenv apache2 libapache2-mod-wsgi-py3 mongodb


mkdir /var/www
mkdir /var/www/cmat

virtualenv -p python3 /var/www/cmat/venv

echo "[+]Copying Files To /var/www/cmat "

cp -r ./* /var/www/cmat/

echo "[+] Fixing Permissions"

chown www-data:www-data -R /var/www/cmat

/var/www/cmat/venv/bin/pip install -r /var/www/cmat/app/requirments.txt


echo "[+] Creating /etc/apache2/sites-available/cmat.conf"

FILE="/etc/apache2/sites-available/cmat.conf"
SFILE="/etc/systemd/system/cmat_robot.service"

/bin/cat <<EOM >$FILE
<VirtualHost *:80>
    ServerName cmat.tk
    ServerAdmin admin@mywebsite.com
    WSGIDaemonProcess cmat python-home=/var/www/cmat/venv python-path=/var/www/cmat/venv/lib/python3.5/site-packages
    WSGIProcessGroup cmat
    WSGIScriptAlias / /var/www/cmat/app/wsgi.wsgi
    <Directory /var/www/cmat/app>
            Order allow,deny
            Allow from all
    </Directory>
    Alias /static /var/www/cmat/app/static
    <Directory /var/www/cmat/app/static/>
            Order allow,deny
            Allow from all
    </Directory>
</VirtualHost>
EOM

echo "[+] Done! "

echo "[+] Creating Service File"

/bin/cat <<EOM >$SFILE
[Unit]
Description=uWSGI instance to serve CMAT Robot
After=network.target

[Service]
User=www-data
Group=www-data
WorkingDirectory=/var/www/cmat/app
Environment="PATH=/var/www/cmat/app"
ExecStart=/var/www/cmat/venv/bin/python3 /var/www/cmat/app/robot_main.py

[Install]
WantedBy=multi-user.target
EOM

echo "[+] Done! "

echo "[!] To Configure a url for the web app edit /etc/apache2/sites-available/cmat.conf"

a2ensite cmat
service apache2 restart

systemctl daemon-reload
service cmat_robot start

echo "[!] To check the site type service apache2 status"
echo "[!] To check the robot service type service cmat_robot status"
