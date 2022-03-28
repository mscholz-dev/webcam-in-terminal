### Languages:

- [English](#english)
- [Français](#french)

<br/>

# <a id="english">🇬🇧 Display your webcam in terminal 😝</a>

Every time your display your webcam in terminal and create a directory with all displayed pictures
<br>
<br>

## Installation

⚠️ You need `GraphicsMagick` installed before

```
$ npm i webcam-in-terminal
```

<br>

## Usages

### Display webcam in terminal

```javascript
import { printWebcamInTerminal } from "webcam-in-terminal";

printWebcamInTerminal();
```

Create a directory named `web-in-terminal-` (default setting)
<br>
<br>

### Display webcam in terminal and choose directory name of saved pictures

```javascript
import { printWebcamInTerminal } from "webcam-in-terminal";

printWebcamInTerminal(`my-records-${Date.now()}`);
```

Create a directory named `my-records-${Date.now()}`
<br>
<br>

### Delete all directories created with default directory name

```javascript
import { deleteDirectories } from "webcam-in-terminal";

deleteDirectories();
```

Delete all directories who contains `web-in-terminal-` (default setting)
<br>
<br>

### Delete all directories created who contain a specific string

```javascript
import { deleteDirectories } from "webcam-in-terminal";

deleteDirectories("my-records-");
```

Delete all directories who contains `my-records-`

<br>

## Issues

If you have a problem, please contact me at: mscholz.dev@gmail.com

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

# <a id="french">🇫🇷 Affiche votre webcam dans ton terminal 😝</a>

À chaque fois que votre webcam est affiché dans ton terminal cela créer un dossier qui contiendra les images affichées
<br>
<br>

## Installation

⚠️ Vous devez avoir `GraphicsMagick` installé avant

```
$ npm i webcam-in-terminal
```

<br>

## Usages

### Afficher la webcam dans le terminal

```javascript
import { printWebcamInTerminal } from "webcam-in-terminal";

printWebcamInTerminal();
```

Créé un dossier nommé `web-in-terminal-` (paramètre par défaut)
<br>
<br>

### Affiche la webcam dans le terminal en choisissant le nom du dossier de sauvegarde

```javascript
import { printWebcamInTerminal } from "webcam-in-terminal";

printWebcamInTerminal(`my-records-${Date.now()}`);
```

Créé un dossier nommé `my-records-${Date.now()}`
<br>
<br>

### Efface tous les dossiers créés avec le nom de dossier par défaut

```javascript
import { deleteDirectories } from "webcam-in-terminal";

deleteDirectories();
```

Efface tous les dossiers qui contiennent `web-in-terminal-` (paramètre par défaut)
<br>
<br>

### Efface tous les dossiers créés avec une chaîne de caractère spécifique

```javascript
import { deleteDirectories } from "webcam-in-terminal";

deleteDirectories("my-records-");
```

Efface tous les dossiers qui contiennent `my-records-`

<br/>

## Problèmes

En cas de problème, merci de me contacter sur: mscholz.dev@gmail.com
