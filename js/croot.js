import { get,postWithToken } from "https://jscroot.github.io/api/croot.js";
import { setInner , onClick} from "https://jscroot.github.io/element/croot.js";
import { token,AmbilResponse,url,databimbingansemester } from "./controller/table.js"


postWithToken(url, "Login",token, databimbingansemester, AmbilResponse)

onClick()



