<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Loop - 九九乘法表</title>
	<style type="text/css">
		td{
			border: 1px solid black
		}
	</style>
</head>
<body>

	<script type="text/javascript">
		document.write("<table>")
			for(var i = 1; i <= 9; i++){
				document.write("<tr>")
				for(var j = 1; j <= i; j++){
					document.write("<td>")
						document.write( i + "*" + j + "=" + i*j + "")
					document.write("</td>")
				}
				document.write("</tr>")
			}
		document.write("</table>")
	</script>
</body>
</html>
