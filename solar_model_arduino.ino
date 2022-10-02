#include <SoftwareSerial.h>

//the SoftwareSerial.h parts refer to https://www.youtube.com/watch?v=uwrWkiI6Hg8&t=17s
 
#define DEBUG true
char pumpNum;
#define pump1 8
#define pump2 9 
#define pump3 10
#define earth 6 
#define sun1 11
#define sun2 12
#define sun3 13
 
SoftwareSerial esp8266(7,6); // make RX Arduino line is pin 2, make TX Arduino line is pin 3.
                             // This means that you need to connect the TX line from the esp to the Arduino's pin 2
                             // and the RX line from the esp to the Arduino's pin 3
void setup()
{
  Serial.begin(9600);
  esp8266.begin(115200); // your esp's baud rate might be different
  
  pinMode(11,OUTPUT);
  pinMode(12,OUTPUT);
  pinMode(13,OUTPUT);
  pinMode(6,OUTPUT); //earth LED 1&2 
  pinMode(8,OUTPUT); //pump 1
  pinMode(9,OUTPUT); //pump 2
  pinMode(10,OUTPUT);//pump 3(跟別人相反)

  digitalWrite(pump1, HIGH); //pump
  digitalWrite(pump2, HIGH); //pump
  digitalWrite(pump3, LOW); //pump反派   
  digitalWrite(earth, LOW);  //Earth LED
  digitalWrite(sun1, LOW); //Sun LED 1
  digitalWrite(sun2, LOW); //Sun LED 2
  digitalWrite(sun3, LOW); //Sun LED 3
   
  sendData("AT+RST\r\n",2000,DEBUG); // reset module
  sendData("AT+CWMODE=2\r\n",1000,DEBUG); // configure as access point
  sendData("AT+CIFSR\r\n",1000,DEBUG); // get ip address
  sendData("AT+CIPMUX=1\r\n",1000,DEBUG); // configure for multiple connections
  sendData("AT+CIPSERVER=1,80\r\n",1000,DEBUG); // turn on server on port 80
}
 
void loop()
{
  //digitalWrite(11,!digitalRead(11));
  //delay(1500);

  if(esp8266.available()) // check if the esp is sending a message 
  {
 
    
    if(esp8266.find("+IPD,"))
    {
     delay(1000); // wait for the serial buffer to fill up (read all the serial data)
     // get the connection id so that we can then disconnect
     int connectionId = esp8266.read()-48; // subtract 48 because the read() function returns 
                                           // the ASCII decimal value and 0 (the first decimal number) starts at 48
     Serial.println(connectionId);                                       
          
     esp8266.find("pin="); // advance cursor to "pin="
     
     int pinNumber = (esp8266.read()-48)*10; // get first number i.e. if the pin 13 then the 1st number is 1, then multiply to get 10
     Serial.println(pinNumber);
     pinNumber += (esp8266.read()-48); // get second number, i.e. if the pin number is 13 then the 2nd number is 3, then add to the first number
     Serial.println(pinNumber);
     
     digitalWrite(pinNumber, !digitalRead(pinNumber)); // toggle pin 
     Serial.println("pin:");
     Serial.print(pinNumber);   

     // make close command
     String closeCommand = "AT+CIPCLOSE="; 
     closeCommand+=connectionId; // append connection id
     closeCommand+="\r\n";
     
     sendData(closeCommand,1000,DEBUG); // close connection
    }
  }

  if(Serial.available()){
    pumpNum = Serial.read();
    Serial.println(pumpNum);
  } 
  delay(10);
  
  switch(pumpNum){

    //全關
    case '0':
    Serial.print("all close");
    digitalWrite(pump1, HIGH); //pump
    digitalWrite(pump2, HIGH); //pump
    digitalWrite(pump3, LOW); //pump反派   
    digitalWrite(earth, LOW);  //Earth LED
    digitalWrite(sun1, LOW); //Sun LED 1
    digitalWrite(sun2, LOW); //Sun LED 2
    digitalWrite(sun3, LOW); //Sun LED 3
    break;
    
    //最小
    case '1':
    Serial.print("smallest");
    digitalWrite(pump1, HIGH); //關
    digitalWrite(pump2, HIGH); //關
    digitalWrite(pump3, HIGH); //反派 開
    digitalWrite(earth, HIGH);
    digitalWrite(sun1, HIGH);
    digitalWrite(sun2, HIGH);
    break;
  
    //中
    case '2':
    Serial.print("mid");
    digitalWrite(pump1, LOW); //開
    digitalWrite(pump2, HIGH); //關
    digitalWrite(pump3, HIGH); //反派 開
    digitalWrite(earth, HIGH);
    digitalWrite(sun1, HIGH);
    digitalWrite(sun2, HIGH);
    break;
  
    //最大
    case '3':
    Serial.print("largest");
    digitalWrite(pump1, LOW); //開
    digitalWrite(pump2, LOW); //開
    digitalWrite(pump3, HIGH); //反派 關
    digitalWrite(earth, HIGH);
    digitalWrite(sun1, HIGH);
    digitalWrite(sun2, HIGH);
    break;

    // 開地球和太陽
    case 'o':
    Serial.print("open");
    digitalWrite(earth, HIGH);
    digitalWrite(sun1, HIGH);
    digitalWrite(sun2, HIGH);
    break;


  } 
}
 
/*
* Name: sendData
* Description: Function used to send data to ESP8266.
* Params: command - the data/command to send; timeout - the time to wait for a response; debug - print to Serial window?(true = yes, false = no)
* Returns: The response from the esp8266 (if there is a reponse)
*/
String sendData(String command, const int timeout, boolean debug)
{
    String response = "";
    
    esp8266.print(command); // send the read character to the esp8266
    
    long int time = millis();
    
    while( (time+timeout) > millis())
    {
      while(esp8266.available())
      {
        
        // The esp has data so display its output to the serial window 
        char c = esp8266.read(); // read the next character.
        response+=c;
      }  
    }
    
    if(debug)
    {
      Serial.print(response);
    }
    
    return response;
}