#!/bin/bash

zoonimal (name) 
{
touch '$name.js'
echo 'class $name {' > $name.js
echo '	constructor(data) {' > $name.js
echo '		this.id = 0;' > $name.js
echo '		this.name = data.name || null' > $name.js
echo '		this.gender = data.gender || null' > $name.js
}
