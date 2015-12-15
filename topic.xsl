<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <html>
  <body>
  <h2>Game Forum</h2>
    <table border="1">
      <tr bgcolor="#9acd32">
        <th style="text-align:left">UserID</th>
        <th style="text-align:left">Topic</th>
      </tr>
      <xsl:for-each select="post/topic">
      <tr>
        <td><xsl:value-of select="userid"/></td>
        <td><xsl:value-of select="topic"/></td>
      </tr>
      </xsl:for-each>
    </table>
  </body>
  </html>
</xsl:template>
</xsl:stylesheet>