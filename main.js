const LinksSocialMedia = {
  github: 'aneris91',
  youtube: 'jakelinygracielly',
  facebook: 'maykbrito',
  instagram: 'jakeliny.gracielly',
  twitter: 'f__aneris'
}

function changeLinksSocialMedia() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeLinksSocialMedia()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userProfile.href = data.html_url
      userImage.src = data.avatar_url
      userLink.textContent = data.login
    })
}

getGitHubProfileInfos()
