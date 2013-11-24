<html>
	<head>
			<SCRIPT src = "script.js"></SCRIPT>

	</head>
	<body>
		<input id="identifiant" type="text"  onBlur= "verifID()"/>
		<input type = "submit" onClick = "alert(bitch)"/></html>

		On which site do you want to go ?


	<?php
		$dirname = '../UrlSaved';
		$dir = opendir($dirname);

		while($file = readdir($dir)) {
			if($file != '.' && $file != '..' && !is_dir($dirname.$file))
			{
								echo "<>" Coucou;

				echo"<> Bonjour ",$file," ",$dirname,", vous avez </font>";
			}
		}

		closedir($dir);
	?> 
	</body>


</html>