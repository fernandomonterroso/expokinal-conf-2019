'use strict'

var bcrypt = require('bcrypt-nodejs');
var User = require('../models/user');
var Producto = require('../models/productos')
var jwt = require('../services/jwt');
var path = require('path');
var fs = require('fs');
const nodemailer = require('nodemailer');

function correoRestablecerPassword(req, res) {
    var params = req.body;
    var userId = req.user.sub;
    var correoE;
    var password;
    var nombre;
    User.findById({ _id: userId }, (err, usuarioEncontrado) => {
        if (err) return res.status(500).send({ message: 'No se ha podido encontrar la peticion' });
        if (usuarioEncontrado) {
            correoE = usuarioEncontrado.email;
            password = usuarioEncontrado.password;
            nombre = usuarioEncontrado.nombre;
            console.log(correoE, password);

            var transporter = nodemailer.createTransport({
                service: "gmail",

                secure: false, // true for 465, false for other ports
                auth: {
                    user: `noreplykinal@gmail.com`, // Cambialo por tu email
                    pass: `encriptado2019` // Cambialo por tu password
                }
            });
            const mailOptions = {
                from: `"Kinal no reply" `,
                to: `"${correoE}"`, // Cambia esta parte por el destinatario
                subject: `Confirmacion`,
                html: `
                <html style="width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;">
                <head> 
                 <meta charset="UTF-8"> 
                 <meta content="width=device-width, initial-scale=1" name="viewport"> 
                 <meta name="x-apple-disable-message-reformatting"> 
                 <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
                 <meta content="telephone=no" name="format-detection"> 
                 <title>Nueva plantilla de correo electrónico 2019-07-09</title> 
                 <!--[if (mso 16)]>
                   <style type="text/css">
                   a {text-decoration: none;}
                   </style>
                   <![endif]--> 
                 <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--> 
                 <style type="text/css">
               @media only screen and (max-width:600px) {p, ul li, ol li, a { font-size:16px!important; line-height:150%!important } h1 { font-size:20px!important; text-align:center; line-height:120%!important } h2 { font-size:16px!important; text-align:left; line-height:120%!important } h3 { font-size:20px!important; text-align:center; line-height:120%!important } h1 a { font-size:20px!important } h2 a { font-size:16px!important; text-align:left } h3 a { font-size:20px!important } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:10px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:12px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } a.es-button { font-size:14px!important; display:block!important; border-left-width:0px!important; border-right-width:0px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } .es-desk-menu-hidden { display:table-cell!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } }
               #outlook a {
                   padding:0;
               }
               .ExternalClass {
                   width:100%;
               }
               .ExternalClass,
               .ExternalClass p,
               .ExternalClass span,
               .ExternalClass font,
               .ExternalClass td,
               .ExternalClass div {
                   line-height:100%;
               }
               .es-button {
                   mso-style-priority:100!important;
                   text-decoration:none!important;
               }
               a[x-apple-data-detectors] {
                   color:inherit!important;
                   text-decoration:none!important;
                   font-size:inherit!important;
                   font-family:inherit!important;
                   font-weight:inherit!important;
                   line-height:inherit!important;
               }
               .es-desk-hidden {
                   display:none;
                   float:left;
                   overflow:hidden;
                   width:0;
                   max-height:0;
                   line-height:0;
                   mso-hide:all;
               }
               .es-button-border:hover a.es-button {
                   background:#ffffff!important;
                   border-color:#ffffff!important;
               }
               .es-button-border:hover {
                   background:#ffffff!important;
                   border-style:solid solid solid solid!important;
                   border-color:#3d5ca3 #3d5ca3 #3d5ca3 #3d5ca3!important;
               }
               </style> 
                </head> 
                <body style="width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;"> 
                 <div class="es-wrapper-color" style="background-color:#FAFAFA;"> 
                  <!--[if gte mso 9]>
                           <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                               <v:fill type="tile" color="#fafafa"></v:fill>
                           </v:background>
                       <![endif]--> 
                  <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;"> 
                    <tr style="border-collapse:collapse;"> 
                     <td valign="top" style="padding:0;Margin:0;"> 
                      <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;"> 
                        <tr style="border-collapse:collapse;"> 
                         <td class="es-info-area" style="padding:0;Margin:0;background-color:#FAFAFA;" bgcolor="#fafafa" align="center"> 
                          <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FAFAFA;" width="600" cellspacing="0" cellpadding="0" bgcolor="#fafafa" align="center"> 
                            <tr style="border-collapse:collapse;"> 
                             <td style="Margin:0;padding-bottom:5px;padding-top:20px;padding-left:20px;padding-right:20px;background-position:left top;" align="left"> 
                              <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                                <tr style="border-collapse:collapse;"> 
                                 <td width="560" valign="top" align="center" style="padding:0;Margin:0;"> 
                                  <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                                    <tr style="border-collapse:collapse;"> 
                                     <td class="es-infoblock" align="center" style="padding:0;Margin:0;padding-bottom:5px;line-height:14px;font-size:12px;color:#CCCCCC;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:12px;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:14px;color:#CCCCCC;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;">Si no puedes ver la información. </font></font></font></font><a target="_blank" href="" download="mi-lindo-informe" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;font-size:12px;text-decoration:none;color:#CCCCCC;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;">Click aqui</font></font></font></font></a></p> </td> 
                                    </tr> 
                                  </table> </td> 
                                </tr> 
                              </table> </td> 
                            </tr> 
                          </table> </td> 
                        </tr> 
                      </table> 
                      <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;"> 
                        <tr style="border-collapse:collapse;"> 
                         <td style="padding:0;Margin:0;background-color:#FAFAFA;" bgcolor="#fafafa" align="center"> 
                          <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
                            <tr style="border-collapse:collapse;"> 
                             <td style="Margin:0;padding-top:10px;padding-bottom:15px;padding-left:20px;padding-right:20px;border-radius:10px 10px 0 0px;background-color:#FBAA68;background-position:left top;" bgcolor="#0b5394" align="left"> 
                              <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                                <tr style="border-collapse:collapse;"> 
                                 <td width="560" valign="top" align="center" style="padding:0;Margin:0;"> 
                                  <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                                    <tr style="border-collapse:collapse;"> 
                                     <td align="center" style="padding:0;Margin:0;padding-top:10px;"> <img src="https://images-expokinal2019.s3.amazonaws.com/kinal+png.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;" width="212"></td> 
                                    </tr> 
                                  </table> </td> 
                                </tr> 
                              </table> </td> 
                            </tr> 
                            <tr style="border-collapse:collapse;"> 
                             <td style="padding:0;Margin:0;padding-left:20px;padding-right:20px;padding-top:40px;background-color:transparent;background-position:left top;" bgcolor="transparent" align="left"> 
                              <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                                <tr style="border-collapse:collapse;"> 
                                 <td width="560" valign="top" align="center" style="padding:0;Margin:0;"> 
                                  <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-position:left top;" width="100%" cellspacing="0" cellpadding="0"> 
                                    <tr style="border-collapse:collapse;"> 
                                     <td align="center" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px;"> <img src="https://gbnwt.stripocdn.email/content/guids/CABINET_dd354a98a803b60e2f0411e893c82f56/images/23891556799905703.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;" width="175"></td> 
                                    </tr> 
                                    <tr style="border-collapse:collapse;"> 
                                     <td align="center" style="padding:0;Margin:0;padding-top:15px;padding-bottom:15px;"> <h1 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:20px;font-style:normal;font-weight:normal;color:#333333;"><strong><font style="vertical-align:inherit;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;">¿HA OLVIDADO SU </font></font></font></font></strong></h1><h1 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:20px;font-style:normal;font-weight:normal;color:#333333;"><strong><font style="vertical-align:inherit;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;">&nbsp;CONTRASEÑA?</font></font></font></font></strong></h1> </td> 
                                    </tr> 
                                    <tr style="border-collapse:collapse;"> 
                                     <td align="left" style="padding:0;Margin:0;padding-left:40px;padding-right:40px;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:24px;color:#666666;text-align:center;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;">Hola, ${nombre}</font></font></font></font></p> </td> 
                                    </tr> 
                                    <tr style="border-collapse:collapse;"> 
                                     <td align="left" style="padding:0;Margin:0;padding-right:35px;padding-left:40px;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:24px;color:#666666;text-align:center;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;">Hubo una solicitud para cambiar su contraseña!</font></font></font></font></p> </td> 
                                    </tr> 
                                    <tr style="border-collapse:collapse;"> 
                                     <td align="center" style="padding:0;Margin:0;padding-top:25px;padding-left:40px;padding-right:40px;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:24px;color:#666666;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;">Si no hizo esta solicitud, simplemente ignore este correo electrónico. </font></font></font><font style="vertical-align:inherit;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;">De lo contrario, haga clic en el botón de abajo para cambiar su contraseña:</font></font></font></font></p> </td> 
                                    </tr> 
                                    <tr style="border-collapse:collapse;"> 
                                     <td align="center" style="Margin:0;padding-left:10px;padding-right:10px;padding-top:40px;padding-bottom:40px;"> <span class="es-button-border" style="border-style:solid;border-color:#3D5CA3;background:#FFFFFF;border-width:2px;display:inline-block;border-radius:10px;width:auto;"> <a href="https://viewstripo.email/" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:14px;color:#3D5CA3;border-style:solid;border-color:#FFFFFF;border-width:15px 20px 15px 20px;display:inline-block;background:#FFFFFF;border-radius:10px;font-weight:bold;font-style:normal;line-height:17px;width:auto;text-align:center;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;">RESTABLECER LA CONTRASEÑA</font></font></font></font></a> </span> </td> 
                                    </tr> 
                                  </table> </td> 
                                </tr> 
                              </table> </td> 
                            </tr> 
                            <tr style="border-collapse:collapse;"> 
                             <td style="padding:0;Margin:0;padding-left:10px;padding-right:10px;padding-top:20px;background-position:center center;" align="left"> 
                              <!--[if mso]><table width="580" cellpadding="0" cellspacing="0"><tr><td width="199" valign="top"><![endif]--> 
                              <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left;"> 
                                <tr style="border-collapse:collapse;"> 
                                 <td width="199" align="left" style="padding:0;Margin:0;"> 
                                  <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-position:center center;" width="100%" cellspacing="0" cellpadding="0"> 
                                    <tr style="border-collapse:collapse;"> 
                                     <td class="es-m-txt-c" align="right" style="padding:0;Margin:0;padding-top:15px;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:24px;color:#666666;"><strong><font style="vertical-align:inherit;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;">Síguenos:</font></font></font></font></strong></p> </td> 
                                    </tr> 
                                  </table> </td> 
                                </tr> 
                              </table> 
                              <!--[if mso]></td><td width="20"></td><td width="361" valign="top"><![endif]--> 
                              <table class="es-right" cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right;"> 
                                <tr style="border-collapse:collapse;"> 
                                 <td width="361" align="left" style="padding:0;Margin:0;"> 
                                  <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-position:center center;" width="100%" cellspacing="0" cellpadding="0"> 
                                    <tr style="border-collapse:collapse;"> 
                                     <td class="es-m-txt-c" align="left" style="padding:0;Margin:0;padding-bottom:5px;padding-top:10px;"> 
                                      <table class="es-table-not-adapt es-social" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                                        <tr style="border-collapse:collapse;"> 
                                         <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px;"> <a href="https://www.facebook.com/kinal.gt/"> <img src="https://gbnwt.stripocdn.email/content/assets/img/social-icons/rounded-gray/facebook-rounded-gray.png" alt="Pensión completa" title="Facebook" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;"></a></td> 
                                         <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px;"> <a href="https://www.facebook.com/kinal.gt/"> <img src="https://gbnwt.stripocdn.email/content/assets/img/social-icons/rounded-gray/twitter-rounded-gray.png" alt="Tw" title="Gorjeo" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;"></a></td> 
                                         <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px;"><a href="https://www.facebook.com/kinal.gt/"> <img src="https://gbnwt.stripocdn.email/content/assets/img/social-icons/rounded-gray/instagram-rounded-gray.png" alt="Yo g" title="Instagram" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;"></a></td> 
                                         <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px;"><a href="https://www.youtube.com/user/tecnologicokinal"> <img src="https://gbnwt.stripocdn.email/content/assets/img/social-icons/rounded-gray/youtube-rounded-gray.png" alt="Yt" title="Youtube" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;"></a></td> 
                                         <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px;"><a href="https://www.facebook.com/kinal.gt/"> <img src="https://gbnwt.stripocdn.email/content/assets/img/social-icons/rounded-gray/linkedin-rounded-gray.png" alt="En" title="Linkedin" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;"></a></td> 
                                        </tr> 
                                      </table> </td> 
                                    </tr> 
                                  </table> </td> 
                                </tr> 
                              </table> 
                              <!--[if mso]></td></tr></table><![endif]--> </td> 
                            </tr> 
                            <tr style="border-collapse:collapse;"> 
                             <td style="Margin:0;padding-top:5px;padding-bottom:20px;padding-left:20px;padding-right:20px;background-position:left top;" align="left"> 
                              <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                                <tr style="border-collapse:collapse;"> 
                                 <td width="560" valign="top" align="center" style="padding:0;Margin:0;"> 
                                  <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                                    <tr style="border-collapse:collapse;"> 
                                     <td align="center" style="padding:0;Margin:0;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;">Contacte con nosotros: (502) 23 87 76 00 | </font></font></font></font><a target="_blank" href="mailto:info@name.com" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;font-size:14px;text-decoration:none;color:#666666;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;">info@kinal.org.gt</font></font></font></font></a></p> </td> 
                                    </tr> 
                                  </table> </td> 
                                </tr> 
                              </table> </td> 
                            </tr> 
                          </table> </td> 
                        </tr> 
                      </table> 
                      <table class="es-footer" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top;"> 
                        <tr style="border-collapse:collapse;"> 
                         <td style="padding:0;Margin:0;background-color:#FAFAFA;" bgcolor="#fafafa" align="center"> 
                          <table class="es-footer-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;"> 
                            <tr style="border-collapse:collapse;"> 
                             <td style="Margin:0;padding-top:10px;padding-left:20px;padding-right:20px;padding-bottom:30px;border-radius:0px 0px 10px 10px;background-color:#0B5394;background-position:left top;" bgcolor="#0b5394" align="left"> 
                              <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                                <tr style="border-collapse:collapse;"> 
                                 <td width="560" valign="top" align="center" style="padding:0;Margin:0;"> 
                                  <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                                    <tr style="border-collapse:collapse;"> 
                                     <td align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px;"> <h2 style="Margin:0;line-height:19px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:16px;font-style:normal;font-weight:normal;color:#FFFFFF;"><strong><font style="vertical-align:inherit;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;">¿Tienes alguna pregunta?</font></font></font></font></strong></h2> </td> 
                                    </tr> 
                                    <tr style="border-collapse:collapse;"> 
                                     <td align="left" style="padding:0;Margin:0;padding-bottom:5px;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#FFFFFF;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;">Estamos aquí para ayudar, aprender más sobre nosotros </font></font></font></font><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;font-size:14px;text-decoration:none;color:#FFFFFF;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;">aquí</font></font></font></font></a></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#FFFFFF;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;">o </font></font></font></font><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;font-size:14px;text-decoration:none;color:#FFFFFF;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;">contáctenos</font></font></font></font></a><br></p> </td> 
                                    </tr> 
                                  </table> </td> 
                                </tr> 
                              </table> </td> 
                            </tr> 
                          </table> </td> 
                        </tr> 
                      </table> 
                      <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;"> 
                        <tr style="border-collapse:collapse;"> 
                         <td style="padding:0;Margin:0;background-color:#FAFAFA;" bgcolor="#fafafa" align="center"> 
                          <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;" width="600" cellspacing="0" cellpadding="0" bgcolor="transparent" align="center"> 
                            <tr style="border-collapse:collapse;"> 
                             <td style="padding:0;Margin:0;padding-top:15px;background-position:left top;" align="left"> 
                              <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                                <tr style="border-collapse:collapse;"> 
                                 <td width="600" valign="top" align="center" style="padding:0;Margin:0;"> 
                                  <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                                    <tr style="border-collapse:collapse;"> 
                                     <td style="padding:0;Margin:0;"> 
                                      <table class="es-menu" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                                        <tr class="links" style="border-collapse:collapse;"> 
                                         <td style="Margin:0;padding-left:5px;padding-right:5px;padding-top:0px;padding-bottom:1px;border:0;" id="esd-menu-id-0" width="33.33%" valign="top" bgcolor="transparent" align="center"> <a  target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;font-size:14px;text-decoration:none;display:block;color:#3D5CA3;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;">próximo</font></font></font></font></a> </td> 
                                         <td style="Margin:0;padding-left:5px;padding-right:5px;padding-top:0px;padding-bottom:1px;border:0;border-left:1px solid #3D5CA3;" id="esd-menu-id-1" esdev-border-color="#3d5ca3" width="33.33%" valign="top" bgcolor="transparent" align="center"> <a href="expokinal.com" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;font-size:14px;text-decoration:none;display:block;color:#3D5CA3;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;">Ir a expokinal</font></font></font></font></a> </td> 
                                         <td style="Margin:0;padding-left:5px;padding-right:5px;padding-top:0px;padding-bottom:1px;border:0;border-left:1px solid #3D5CA3;" id="esd-menu-id-2" esdev-border-color="#3d5ca3" width="33.33%" valign="top" bgcolor="transparent" align="center"> <a target="_blank" href="http://www.kinal.org.gt/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;font-size:14px;text-decoration:none;display:block;color:#3D5CA3;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;">Sobre nosotros</font></font></font></font></a> </td> 
                                        </tr> 
                                      </table> </td> 
                                    </tr> 
                                    <tr style="border-collapse:collapse;"> 
                                     <td align="center" style="padding:0;Margin:0;padding-bottom:20px;padding-left:20px;padding-right:20px;"> 
                                      <table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                                        <tr style="border-collapse:collapse;"> 
                                         <td style="padding:0;Margin:0px;border-bottom:1px solid #FAFAFA;background:none;height:1px;width:100%;margin:0px;"></td> 
                                        </tr> 
                                      </table> </td> 
                                    </tr> 
                                  </table> </td> 
                                </tr> 
                              </table> </td> 
                            </tr> 
                          </table> </td> 
                        </tr> 
                      </table> 
                      <table class="es-footer" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top;"> 
                        <tr style="border-collapse:collapse;"> 
                         <td style="padding:0;Margin:0;background-color:#FAFAFA;" bgcolor="#fafafa" align="center"> 
                          <table class="es-footer-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;" width="600" cellspacing="0" cellpadding="0" bgcolor="transparent" align="center"> 
                            <tr style="border-collapse:collapse;"> 
                             <td align="left" style="Margin:0;padding-bottom:5px;padding-top:15px;padding-left:20px;padding-right:20px;"> 
                              <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                                <tr style="border-collapse:collapse;"> 
                                 <td width="560" valign="top" align="center" style="padding:0;Margin:0;"> 
                                  <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                                    <tr style="border-collapse:collapse;"> 
                                     <td align="center" style="padding:0;Margin:0;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:12px;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:18px;color:#666666;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;">Este boletín diario se envió a <font>${correoE}</font> desde el nombre de la compañía porque se suscribe. </font></font></font><font style="vertical-align:inherit;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;">Si no desea recibir este correo electrónico, puede </font></font></font></font><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;font-size:12px;text-decoration:underline;color:#333333;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;">darse de baja aquí</font></font></font></font></a><font style="vertical-align:inherit;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;"><font style="vertical-align:inherit;"> .</font></font></font></font></p> </td> 
                                    </tr> 
                                  </table> </td> 
                                </tr> 
                              </table> </td> 
                            </tr> 
                          </table> </td> 
                        </tr> 
                      </table> 
                      <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;"> 
                        <tr style="border-collapse:collapse;"> 
                         <td align="center" style="padding:0;Margin:0;"> 
                          <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
                            <tr style="border-collapse:collapse;"> 
                             <td align="left" style="Margin:0;padding-left:20px;padding-right:20px;padding-top:30px;padding-bottom:30px;"> 
                              <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                                <tr style="border-collapse:collapse;"> 
                                 <td width="560" valign="top" align="center" style="padding:0;Margin:0;"> 
                                  <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                                    <tr style="border-collapse:collapse;"> 
                                     <td class="es-infoblock" align="center" style="padding:0;Margin:0;line-height:14px;font-size:12px;color:#CCCCCC;"> <a target="_blank" href="https://www.linkedin.com/in/fernando-monterroso-717866169/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;font-size:12px;text-decoration:none;color:#CCCCCC;"> <img width="50px" src="https://images-expokinal2019.s3.amazonaws.com/Logo+PNG.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;" width="125"> </a> </td> 
                                    </tr> 
                                  </table> </td> 
                                </tr> 
                              </table> </td> 
                            </tr> 
                          </table> </td> 
                        </tr> 
                      </table> </td> 
                    </tr> 
                  </table> 
                 </div>  
                </body>
               </html>
        `
            };
            transporter.sendMail(mailOptions, function(err, info) {
                if (err)
                    console.log(err)
                else
                    console.log(info);
            });
        } else {
            return res.status(404).send({ message: 'No hay ningun usuario en existencia' });
        }
    });
}

module.exports = {
    correoRestablecerPassword
}