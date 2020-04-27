<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html>
            <body>
                <h1>Best agents</h1>
                <p>Total:<xsl:value-of select="count(//agent)"/>,
                    Sold: <xsl:value-of select="sum(//agent/@count)"/>
                </p>
                <div>
                    <xsl:apply-templates select="//agent"/>
                </div>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="agent">
        <div>
            <p>
                <span>First Name: <xsl:value-of select="@firstName"/></span>
                <span>Last Name: <xsl:value-of select="@lastName"/></span>
                <span>Sold: <xsl:value-of select="@count"/></span>
            </p>
            <table>
                <thead>
                    <tr><th>Author</th><th>Date</th><th>Rank</th></tr>
                </thead>
                <tbody>
                    <xsl:apply-templates select=".//review"/>
                </tbody>
            </table>
        </div>

    </xsl:template>

    <xsl:template match="review">
        <tr>
            <td><xsl:value-of select="@author"/> </td>
            <td><xsl:value-of select="@date"/> </td>
            <td><xsl:value-of select="@rank"/> </td>
        </tr>

    </xsl:template>

</xsl:stylesheet>