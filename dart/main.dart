import 'dart:io';import 'package:dio/dio.dart';void main() async {try {Dio axios = new Dio();var response= await axios.get("https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1");var thUrl = response.data['images'][0]['url'];print('https://www.bing.com${thUrl}');exit(0);} catch(e) {print(e);}}
