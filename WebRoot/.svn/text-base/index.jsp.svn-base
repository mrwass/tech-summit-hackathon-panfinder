<%@ page language="java" import="java.util.*,PanFinder.*,wsPanFinder.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>PAN Finder</title>
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="">
<meta http-equiv="description" content="">
<!--   -->
<link rel="stylesheet" href="css/reset.css" />
<link rel="stylesheet" href="css/style.css" />
<script type="text/javascript" src="js/libs/jquery.min.js"></script>
<script type="text/javascript" src="js/libs/jquery-ui.min.js"></script>
<script type="text/javascript" src="js/libs/jquery.mobile.min.js"></script>
<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
<script type="text/javascript" src="js/libs/gmaps.js"></script>
<!--  -->
<script type="text/javascript" src="js/script.js"></script>
</head>

<body>

	<div class="container">
		<div class="header"> 
			<a href="#" class="logo"> 
				<img src="images/logo.png" alt="" /> 
			</a> 
		</div>
		<div class="search">
		<form action="">
		<label>Escoja el pueblo:</label>
		<select id="towns" name="towns" >
                            
                            <option value="Adjuntas">Adjuntas</option>
                            
                            <option value="Aguada">Aguada</option>
                            
                            <option value="Aguadilla">Aguadilla</option>
                            
                            <option value="Aguas Buenas">Aguas Buenas</option>
                            
                            <option value="Aibonito">Aibonito</option>
                            
                            <option value="Añasco">Añasco</option>
                            
                            <option value="Arecibo">Arecibo</option>
                            
                            <option value="Arroyo">Arroyo</option>
                            
                            <option value="Barceloneta">Barceloneta</option>
                            
                            <option value="Barranquitas">Barranquitas</option>
                            
                            <option value="Bayamón">Bayamón</option>
                            
                            <option value="Cabo Rojo">Cabo Rojo</option>
                            
                            <option value="Caguas">Caguas</option>
                            
                            <option value="Camuy">Camuy</option>
                            
                            <option value="Canovanas">Canovanas</option>
                            
                            <option value="Carolina">Carolina</option>
                            
                            <option value="Carolina - Isla Verde">Carolina - Isla Verde</option>
                            
                            <option value="Cataño">Cataño</option>
                            
                            <option value="Cayey">Cayey</option>
                            
                            <option value="Ceiba">Ceiba</option>
                            
                            <option value="Ciales">Ciales</option>
                            
                            <option value="Cidra">Cidra</option>
                            
                            <option value="Coamo">Coamo</option>
                            
                            <option value="Comerío">Comerío</option>
                            
                            <option value="Corozal">Corozal</option>
                            
                            <option value="Culebra">Culebra</option>
                            
                            <option value="Dorado">Dorado</option>
                            
                            <option value="Fajardo">Fajardo</option>
                            
                            <option value="Florida">Florida</option>
                            
                            <option value="Guánica">Guánica</option>
                            
                            <option value="Guayama">Guayama</option>
                            
                            <option value="Guayanilla">Guayanilla</option>
                            
                            <option value="Guaynabo">Guaynabo</option>
                            
                            <option value="Gurabo">Gurabo</option>
                            
                            <option value="Hatillo">Hatillo</option>
                            
                            <option value="Hormigueros">Hormigueros</option>
                            
                            <option value="Humacao">Humacao</option>
                            
                            <option value="Humacao-Palmas">Humacao-Palmas</option>
                            
                            <option value="Isabela">Isabela</option>
                            
                            <option value="Jayuya">Jayuya</option>
                            
                            <option value="Juana Díaz">Juana Díaz</option>
                            
                            <option value="Juncos">Juncos</option>
                            
                            <option value="Lajas">Lajas</option>
                            
                            <option value="Lares">Lares</option>
                            
                            <option value="Las Marías">Las Marías</option>
                            
                            <option value="Las Piedras">Las Piedras</option>
                            
                            <option value="Loiza">Loiza</option>
                            
                            <option value="Luquillo">Luquillo</option>
                            
                            <option value="Manatí">Manatí</option>
                            
                            <option value="Maricao">Maricao</option>
                            
                            <option value="Maunabo">Maunabo</option>
                            
                            <option value="Mayagüez">Mayagüez</option>
                            
                            <option value="Moca">Moca</option>
                            
                            <option value="Morovis">Morovis</option>
                            
                            <option value="Naguabo">Naguabo</option>
                            
                            <option value="Naranjito">Naranjito</option>
                            
                            <option value="Orocovis">Orocovis</option>
                            
                            <option value="Patillas">Patillas</option>
                            
                            <option value="Peñuelas">Peñuelas</option>
                            
                            <option value="Ponce">Ponce</option>
                            
                            <option value="Quebradillas">Quebradillas</option>
                            
                            <option value="Rincón">Rincón</option>
                            
                            <option value="Río Grande">Río Grande</option>
                            
                            <option value="Sabana Grande">Sabana Grande</option>
                            
                            <option value="Salinas">Salinas</option>
                            
                            <option value="San Germán">San Germán</option>
                            
                            <option value="San Juan">San Juan</option>
                            
                            <option value="San Juan-Condado-Miramar">San Juan-Condado-Miramar</option>
                            
                            <option value="San Juan-Hato Rey">San Juan-Hato Rey</option>
                            
                            <option value="San Juan-Río Piedras">San Juan-Río Piedras</option>
                            
                            <option value="San Juan-Santurce">San Juan-Santurce</option>
                            
                            <option value="San Juan-Viejo SJ">San Juan-Viejo SJ</option>
                            
                            <option value="San Lorenzo">San Lorenzo</option>
                            
                            <option value="San Sebastián">San Sebastián</option>
                            
                            <option value="Santa Isabel">Santa Isabel</option>
                            
                            <option value="Toa Alta">Toa Alta</option>
                            
                            <option value="Toa Baja">Toa Baja</option>
                            
                            <option value="Toa Baja-Levittown">Toa Baja-Levittown</option>
                            
                            <option value="Trujillo Alto">Trujillo Alto</option>
                            
                            <option value="Utuado">Utuado</option>
                            
                            <option value="Vega Alta">Vega Alta</option>
                            
                            <option value="Vega Baja">Vega Baja</option>
                            
                            <option value="Vieques">Vieques</option>
                            
                            <option value="Villalba">Villalba</option>
                            
                            <option value="Yabucoa">Yabucoa</option>
                            
                            <option value="Yauco">Yauco</option>
                            
                          </select>
		<input type="button" id="btn_search" value="Buscar" class="s" />
		</form>
		</div>
		<div class="map-container">
			<div id="map">
			
			</div>
		</div>
		<input type="button" id="load_json" value="Load JSON" />
		<ul id="results">
		</ul>
	</div>
</body>
</html>
