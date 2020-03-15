import Cookies from 'universal-cookie';
function RemoveCookies() {
  const cookies = new Cookies();
  cookies.remove('access_token')
  cookies.remove('refresh_token')
  cookies.set('has_access', false)
  setTimeout(() => window.location.replace('./'))
}

export default RemoveCookies;