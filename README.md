# PerSPective

## 2022 NASA_HACKATHON

Demo Link : https://nasa-hackathon-292j.vercel.app/


The goal of PerSPective is to let people learn how and why NASA explores the Sun and its effect on the Earth in an easier way. PerSPective includes three parts:  

1.PerSPective provides people with easy access to information about the solar system, including the importance of the Parker Solar Probe, Space weather, Solar wind, and their influence.  
2.PerSPective shows ACE real-time data of  Solar wind clearly. People can save time searching for data.  

3.Connecting the website with the firmware, PerSPective visualizes Solar wind by using iron powders and water flow. Iron powders stand for charged particles while water flow stands for Solar wind.PerSPective enables people to imagine real-time data easily in a fun and interactive way.  



## software

Frontend : JavaScript(NextJS), D3.js  
We deploy this website on Vercel. Using NextJS for frontend framework, and using D3.js to draw Charts, which are based on the data from backend through get API.

Backend: Python  
We deploy a server on Heroku for the requests from the web page, every time users click a button, the server will first download and parse the solar wind’s data from NASA solarsoft website, and then return to show the data on the screen.


## hardware  
Components and Supplies in our demo: mini water pumps, Arduino UNO, esp01 wifi module, neodymium magnet, LEDs, iron powder, batteries, relays, jumper wires, breadboard, resistors, acrylic, and plastic pipe.
