# Readme
## gemaakt door Wouter en Mustafa.

> Dit readme bestand is gemaakt na het bericht dat we zijn gezakt voor deze opdracht.


### Inleiding
Deze n8n-node is ontworpen om nodes te integreren in de n8n-workflows.
Deze README bevat essentiële informatie over de mogelijkheden van de node en hoe je deze kan gebruiken.

We gaan het hebben over een aantal dingen.
1. installatie
2. het starten van het project
3. het maken van de node
4. Wat hebben we gemaakt en hoe gebruiken we het?
4. licentie


### Installatie
1. Installeer Git, Node.js en npm op je computer/laptop. Minimum versie van node is 16. De installatie van Node.js en npm vind je [hier](https://docs.npmjs.com/)
2. Clone de github repository [GitHub repository](https://github.com/Mustafa-1062916/n8n-Werkplaats-5.git).
3. Open een terminal `(VsCode / Cmd of andere programma's)` en navigeer naar de map waar je de repository hebt gecloned.
4. Voer het commando `npm install` uit om alle packages te installeren. `(in je n8n-nodes-nasa-pics mapje)`
5. Voer het commando `npm install n8n -g` uit om n8n te installeren.
6. Voer het commando `npm run build` uit om de nodes te compileren. `(in je n8n-nodes-nasa-pics mapje)`
7. Voer het commando `npm link` uit om de nodes te linken aan n8n. `(in je n8n-nodes-nasa-pics mapje)`
8. In je `~/.n8n` ga je vervolgens naar de nodes map en voer de commando `npm link n8n-nodes-nasapics` uit.
9. Start n8n op met het commando `n8n` in je terminal.
10. Open n8n in je browser op [http://localhost:5678/](http://localhost:5678/).
11. Je kan nu de node gebruiken.


### Het starten van het project
Door het project te starten, moet je de volgende commando's uitvoeren in je terminal:
1. In de terminal moet je in het mapje `n8n-nodes-nasa-pics` zitten.
2. Dan voer je de commando `npx n8n`


### Het gebruik van de n8n node
1. Maak binnen n8n een workflow aan. 
2. Voeg een node toe aan je workflow. `Naam van de node: Exchange API`
3. Vul de credentials toe aan de nodes.
4. Vul de gewenste parameters in. `Welke koersen wil je vergelijken?`
5. Voer de workflow uit. `Klik op de Execute Workflow knop`
6. De output van de node kan je zien in de uitvoer van de node.


### Het maken van de node
Als het installeren van N8N al moeilijk was, dan heb je de rest nog niet gezien. Het maken 
van de node is een ingewikkeld proces waar online niet veel over te vinden was. De officele pagina van N8N gaf ons vrij weinig uitleg over hoe dit ging.
Uiteindelijk hebben we met de assistentie van Bob het begin van de node kunnen maken. Door 
het te tweaken hebben we een eigen kunnen maken.


### Wat hebben we gemaakt en hoe gebruiken we het?
In de hectische wereld van vandaag is het belangrijk om snel keuzes te kunnen maken. N8N kan je hierbij heel
goed helpen. Wat N8N helaas nog niet kan, is bepalen of je iets wel of niet moet kopen. Daarom hebben wij een custom
node voor N8N gemaakt die je kan helpen met het maken van financiele keuzes.

We hebben een node gemaakt die je de wisselkoers kan geven voor verschillende valuta. 
Als je de node aanroept, krijg je de waardes terug van hoeveel 1 euro is. Je kan dan nog een 
specifiekere aanvraag doen door te vragen naar een munteenheid en dan krijg je allen van die terug wat het is in een euro.


### Exchange API
De Exchange API node is gemaakt om de koersen te vergelijken. Bijvoorbeeld:
- Euro naar dollar
- Dollar naar euro
- Euro naar alle koersen
- En meer


### Testen
Het testen van de Exchange API node wordt als volgt gedaan: wanneer je de node in de workflow aanroept en de trigger verbindt, kun je de trigger starten. 
Daaruit krijg je een json output van de test. Je kunt de `schedule trigger` instellen op het tijdstip waarop de workflow wordt uitgevoerd. 
De output is de gekozen koers als json object.


### Licentie
Wij houden ons aan de Sustainable Use License van N8N. Dit houd een aantal dingen in:
- You may use or modify the software only for your own internal business purposes or for non-commercial or personal use.
- You may distribute the software or provide it to others only if you do so free of charge for non-commercial purposes.
- You may not alter, remove, or obscure any licensing, copyright, or other notices of the licensor in the software. Any use of the licensor's trademarks is subject to applicable law.

---
Als je meer wilt weten over de node of als je bugs hebt gevonden, kan je een mail sturen naar [Wouter](mailto:1052935@hr.nl).