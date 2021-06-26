#!/usr/bin/python3

import cgi
import subprocess

print("content-type: text/html")
print()

f = cgi.FieldStorage()
cmd = f.getvalue("x")
if cmd:
    o = subprocess.getoutput(cmd)
    print(o)
else:

	docker = f.getvalue("dkr")

	if ":" in docker:
            first,second = docker.split(":")
#start stop operation----------------------------------
            if first == 'start' or first == 'stop':
                op = subprocess.getoutput(f'docker {first} {second}')
                print(op)
#remove images operation--------------------------------i
            elif first == 'image' :
                if second == 'all':
                        op = subprocess.getoutput('docker rmi -f $(docker images -aq)')
                        print(op)
                else:
                        op = subprocess.getoutput(f'docker rmi -f {second}')
                        print(op)
#remove containers operation -----------------------------------------
            elif first == 'container':
                if second == 'all':
                        op = subprocess.getoutput('docker rm -f $(docker ps -aq)')
                        print(op)
                else:
                        op = subprocess.getoutput(f'docker rm -f {second}')
                        print(op)
#lauch a container-----------------------------------
            else:
                op = subprocess.getoutput(f'docker run -dit --name {first} {second}')
                print(op)
		    
		
	#show operation
#show containers---------------------------------------------------    
	elif 'containers' in docker:
            if 'active' in docker:
                op = subprocess.getoutput('docker ps')
                print(op)
            else:
                op = subprocess.getoutput('docker ps -a')
                print(op)
#show images ---------------------------------------------
	elif 'images':
                op = subprocess.getoutput('docker images')
                print(op)
	    




