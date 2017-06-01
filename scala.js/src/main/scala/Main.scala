package website

import scala.scalajs.js.annotation.JSExport
import org.scalajs.dom
import dom.html
import org.scalajs.dom.html
import scala.util.Random
import scalatags.JsDom.all._

@JSExport
object Main {
  @JSExport
  def main(target: html.Div): Unit = {
    target.appendChild(
      div(
        h1("Hello, World!")
      ).render
    )
  }
}