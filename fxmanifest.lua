fx_version "cerulean"
game "gta5"

client_script 'client/client.lua'
server_scripts {'@mysql-async/lib/MySQL.lua','server/server.lua'}

ui_page 'web/dist/index.html'

files {
    'web/dist/index.html',
    'web/dist/*.js',
}
