<!DOCTYPE html>
<html lang="en">
<meta name="viewport" content="width=device-width, initial-scale=1">
	<head>

		<title>Lobbyist Gift Ban Search</title>

		<!-- Meta Tags -->
		<meta charset="utf-8"/>

		<!-- Stylesheets -->
		<link rel="stylesheet" href="css/normalize.css">
		<link href='http://fonts.googleapis.com/css?family=Lusitana:400,700' rel='stylesheet' type='text/css'>
		<link href='http://fonts.googleapis.com/css?family=Open+Sans:300,400,600' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" href="css/style.css"/>

		<!-- JavaScript -->
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
		<script type="text/javascript" src="js/app.js"></script>

	</head>
	<body>

		<header>
			<div class="row">
				<h1>Lobbyist Gift Ban</h1>
			</div>
		</header>

		<div class="form_container">
			<div class="js-show-1 js_page">
				<p>Please Fill Out the Following Information About Your Gift</p>
				<ul>
					<li>
						<label class="js-hide-label" for="company">Company Name</label>
						<input type="text" placeholder="Company Name" id="company" name="company">
					</li>
					<li>
						<label class="js-hide-label" for="name">Person's Last Name</label>
						<input type="text" placeholder="Person's Last Name" id="name" name="name">
					</li>
					<li>
						<label for="date">Date Received</label>
						<input type="date" placeholder="Date Received" id=
						"date" name="date">
					</li>
					<li class="submitBtn"><button>Can I Accept This Gift?</button></li>
				</ul>
			</div>
			<div class="js_page js-show-2 is-hidden">
				<center><span class="load"></span></center>
				<p class="successful"><span class="firstName"></span> <span class="lastName"></span> is Not in Our Database</p>
				<p><span class="firstName"></span> <span class="lastName"></span>, employee of <span class="organizationName"></span> does not appear in our database of lobbyists. You may be able to accept this gift, but more research is always best.</p>
				<div class="links">
					<a class="thin" href="#">See more lobbyists who work at Ramapo College</a>
					<a href="#" class="js-hide-page-2">Submit another search</a>
				</div>
			</div>
			<div class="js_page js-show-3 is-hidden">
				<center><span class="load"></span></center>
				<p class="successful"><span class="firstName"></span> <span class="lastName"></span> is in Our Database</p>
				<p><span class="firstName"></span> <span class="lastName"></span>, employee of <span class="organizationName"></span> found in lobbyist records. You may not be able to accept this gift, but more research is always best.</p>
				<div class="links">
					<a href="#" class="js-show-page-2">Submit another search</a>
				</div>
			</div>
		</div>
		<div class="row">
			<h2>What is this about?</h2>
			<p>
				Political employees are not allowed to accept gifts from individuals who are lobbyists or involved in lobbyist organizations. This app allows you to search an individual or organization who has just sent you a gift or asked you out to dinner, and see if you are allowed to accept under this rule.
			</p>
			<p>
				Above, enter all the information that you have available, including the date that you received this potential gift, and you will get more information, including whether or not you can accept.
			</p>
			<a target="_blank" href="http://www.gpo.gov/fdsys/pkg/FR-2011-09-13/html/2011-23311.htm">Learn More</a>
		</div>

	</body>
</html>