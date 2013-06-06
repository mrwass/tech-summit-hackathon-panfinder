<%@ page language="java" import="java.util.*,PanFinder.*,wsPanFinder.*" pageEncoding="ISO-8859-1"%>
<%
	String town = request.getParameter("towns");
	if(!town.equals("")){
	 		clgetLocals loc = new clgetLocals();
	     	PanInfo paninfo = new PanInfo();
	     	String info = paninfo.fetchInfo(town);
	     	out.print(info);
	}
	else{
		out.print("Error");
	}
%>