import kotlin.browser.document

fun main(args: Array<String>) {
    val message = "Hello JavaScript From Kotlin!"
    println(message)
}

val root = document.getElementById("root")