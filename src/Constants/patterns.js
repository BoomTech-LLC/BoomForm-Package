export const patterns = {
    required: /^[\s\t\r\n]*\S+/gi,
    email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    url: /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
    min(length) {
        return new RegExp(`^.{${length},}$`)
    },
    max(length) {
        return new RegExp(`^.{0,${length}}$`)
    }
}