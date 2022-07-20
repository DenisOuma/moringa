const getPageElement = document.getElementById("pop-up");

function setLoginModal() {
	const loginDiv = document.createElement("div");
	getPageElement.appendChild(loginDiv);
	loginDiv.style.display = "block";
	/* Hidden by default */
	loginDiv.style.zIndex = "1000";
	/* makes sure that your modal sits on top */
	loginDiv.style.height = "100%";
	/* full height */
	loginDiv.style.width = "100%";
	/* full width */
	loginDiv.style.position = "fixed";
	/* stays in place */
	loginDiv.style.left = "0";
	loginDiv.style.top = "0";
	loginDiv.style.display = "block";
	loginDiv.innerHTML = `<div class="discove-talent">
	<button class="discover">Discover Talent</button>
</div>`;
}
