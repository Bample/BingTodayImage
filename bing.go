package main
import (
    "fmt"
    "io/ioutil"
    "net/http"
    "regexp"
)


func main() {
    resp, err := http.Get("https://www.bing.com/")
    if err != nil {
        fmt.Printf("get request failed, err:[%s]", err.Error())
        return
    }
    defer resp.Body.Close()
    bodyContent, err := ioutil.ReadAll(resp.Body)

    rA := regexp.MustCompile("<div id=\"bgImgProgLoad\" data-ultra-definition-src=\"")
    rB := regexp.MustCompile("data-explicit-bing-load=")

    LStr := rA.FindStringSubmatchIndex(string(bodyContent))
    RStr := rB.FindStringSubmatchIndex(string(bodyContent))

    FinallyURL := "https://www.bing.com" + string(bodyContent)[LStr[1]:RStr[0]-2]

    fmt.Println(FinallyURL)    
    
}