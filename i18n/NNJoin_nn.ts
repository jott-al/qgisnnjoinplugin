<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS><TS version="2.0">
<context>
    <name>NNJoin</name>
    <message>
        <location filename="NNJoin_plugin.py" line="68"/>
        <source>&amp;NNJoin</source>
        <translation type="unfinished">&amp;NN-kopling</translation>
    </message>
    <message>
        <location filename="NNJoin_plugin.py" line="67"/>
        <source>NNJoin</source>
        <translation type="unfinished">NN-kopling</translation>
    </message>
</context>
<context>
    <name>NNJoinDialog</name>
    <message>
        <location filename="NNJoin_gui.py" line="88"/>
        <source>NNJoin</source>
        <translation type="unfinished">NN-kopling</translation>
    </message>
    <message>
        <location filename="NNJoin_gui.py" line="96"/>
        <source>No input layer defined</source>
        <translation type="unfinished">Innlaget mangler</translation>
    </message>
    <message>
        <location filename="NNJoin_gui.py" line="102"/>
        <source>No join layer defined</source>
        <translation type="unfinished">Koplingslaget mangler</translation>
    </message>
    <message>
        <location filename="NNJoin_gui.py" line="111"/>
        <source>Joining</source>
        <translation type="unfinished">Kopler</translation>
    </message>
    <message>
        <location filename="NNJoin_gui.py" line="45"/>
        <source>Cancel</source>
        <translation type="unfinished">Avbryt</translation>
    </message>
    <message>
        <location filename="NNJoin_gui.py" line="158"/>
        <source>NNJoin finished</source>
        <translation type="unfinished">NN-kopling avslutta</translation>
    </message>
    <message>
        <location filename="NNJoin_gui.py" line="303"/>
        <source>Killing worker</source>
        <translation type="unfinished">Dreper arbeidsprosessen</translation>
    </message>
    <message>
        <location filename="NNJoin_gui.py" line="309"/>
        <source>Error</source>
        <translation type="unfinished">Feil</translation>
    </message>
    <message>
        <location filename="NNJoin_gui.py" line="317"/>
        <source>Warning</source>
        <translation type="unfinished">Advarsel</translation>
    </message>
    <message>
        <location filename="NNJoin_gui.py" line="325"/>
        <source>Info</source>
        <translation type="unfinished">Informasjon</translation>
    </message>
    <message>
        <location filename="NNJoin_gui.py" line="47"/>
        <source>OK</source>
        <translation type="unfinished">Køyr</translation>
    </message>
    <message>
        <location filename="NNJoin_gui.py" line="46"/>
        <source>Close</source>
        <translation type="unfinished">Avslutt</translation>
    </message>
    <message>
        <location filename="NNJoin_gui.py" line="179"/>
        <source>Worker failed - exception</source>
        <translation type="unfinished">Arbeidsprosessen feila - avbrott</translation>
    </message>
    <message>
        <location filename="NNJoin_gui.py" line="185"/>
        <source>Worker</source>
        <translation type="unfinished">Arbeidsprosess</translation>
    </message>
    <message>
        <location filename="NNJoin_gui.py" line="166"/>
        <source>Aborted</source>
        <translation type="unfinished">Avbrote</translation>
    </message>
    <message>
        <location filename="NNJoin_gui.py" line="168"/>
        <source>No layer created</source>
        <translation type="unfinished">Ikkje noko lag</translation>
    </message>
</context>
<context>
    <name>NNJoinDialogBase</name>
    <message>
        <location filename="ui_frmNNJoin.ui" line="14"/>
        <source>NNJoin</source>
        <translation type="unfinished">NN-kopling</translation>
    </message>
    <message>
        <location filename="ui_frmNNJoin.ui" line="41"/>
        <source>Input vector layer</source>
        <translation type="unfinished">Innlag</translation>
    </message>
    <message>
        <location filename="ui_frmNNJoin.ui" line="91"/>
        <source>Join vector layer</source>
        <translation type="unfinished">Koplingslag</translation>
    </message>
    <message>
        <location filename="ui_frmNNJoin.ui" line="175"/>
        <source>Output layer</source>
        <translation type="unfinished">Resultatlag</translation>
    </message>
    <message>
        <location filename="ui_frmNNJoin.ui" line="218"/>
        <source>Indicates the progress of the join operation</source>
        <translation type="unfinished">Indikerer framdrifta i arbeidet</translation>
    </message>
    <message>
        <location filename="ui_frmNNJoin.ui" line="234"/>
        <source>OK to run the join&lt;br&gt;Close to quit&lt;br&gt;Cancel to abort the join</source>
        <translation type="unfinished">Køyr: Utfør koplinga&lt;br&gt;Avslutt: Avslutt programmet&lt;br&gt;Avbryt: Avbryt programmet</translation>
    </message>
    <message>
        <location filename="ui_frmNNJoin.ui" line="55"/>
        <source>The base layer for the join.&lt;br&gt;Each feature of this layer will be joined to the nearest neighbour from the join layer.</source>
        <translation type="unfinished">Basislaget for koplinga.&lt;br&gt;Kvart objekt i dette laget vil bli kopla til det næraste objektet i koplingslaget</translation>
    </message>
    <message>
        <location filename="ui_frmNNJoin.ui" line="105"/>
        <source>The join layer.&lt;br&gt;A feature from this layer is joined to all the features from the the input layer that has this features as it&apos;s nearest neighbour.</source>
        <translation type="unfinished">Koplingslaget.&lt;br&gt;Eit objekt fra dette laget koplast til alle dei objekta i innlaget som det er næraste nabo til</translation>
    </message>
    <message>
        <location filename="ui_frmNNJoin.ui" line="181"/>
        <source>The result layer that contains the join.&lt;br&gt;For each feature of the input layer, the output layer contains that feature with all it&apos;s attributes and all the attributes of the nearest feature in the join layer added.</source>
        <translation type="unfinished">Resultatlaget som inneholder koplinga.&lt;br&gt;For kvart objekt i innlaget vil utlaget inneholde objektet med sine attributt pluss attributtane til det nærastliggande objektet i koplingslaget</translation>
    </message>
    <message>
        <location filename="ui_frmNNJoin.ui" line="78"/>
        <source>Use approximate input geometries.&lt;br&gt;This will enable the use of a spatial index - could speed up the join considerably.</source>
        <translation type="unfinished">Bruk forenkla geometriar for basislaget.&lt;br&gt;Dette mogeleggjer bruk av ein romlig indeks, noko som vanlegvis får koplinga til å gå fortare.</translation>
    </message>
    <message>
        <location filename="ui_frmNNJoin.ui" line="81"/>
        <source>Approximate geometries using centroids</source>
        <translation type="unfinished">Tilnærma geometriar (sentroider)</translation>
    </message>
    <message>
        <location filename="ui_frmNNJoin.ui" line="153"/>
        <source>Join prefix:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="ui_frmNNJoin.ui" line="160"/>
        <source>The prefix used for the join layer attributes in the result layer.&lt;br&gt;Without a prefix, if a join layer attribute has the same name as an input layer attribute, it will not be included in the result layer.</source>
        <translation type="unfinished">Prefikset som nyttast for attributtane fra koplingslaget i resultatlaget.&lt;br&gt;Utan prefiks vil ein miste alle attributtar frå koplingslaget som har samme navn som ein attributt i inputlaget.</translation>
    </message>
    <message>
        <location filename="ui_frmNNJoin.ui" line="163"/>
        <source>join_</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="ui_frmNNJoin.ui" line="112"/>
        <source>Geometry type:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="ui_frmNNJoin.ui" line="119"/>
        <source>Unknown</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="ui_frmNNJoin.ui" line="130"/>
        <source>Uses an approximation of the geometry (bounding box) for the join</source>
        <translation type="unfinished">Nyttar ei tilnærming til geometrien (omsluttande rektangel) for koplinga.</translation>
    </message>
    <message>
        <location filename="ui_frmNNJoin.ui" line="133"/>
        <source>Use spatial index</source>
        <translation type="unfinished">Bruk romleg indeks</translation>
    </message>
</context>
</TS>
