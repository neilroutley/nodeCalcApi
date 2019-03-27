#!/bin/bash
## change ssid to your network ssid
## change psk to your network password

echo '
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
country=US

network={
    ssid="SSID"
    psk="PASSWORD"
    key_mgmt=WPA-PSK
}
' > wpa_supplicant.conf

touch ssh