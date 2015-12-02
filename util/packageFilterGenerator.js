//Run this on the documention index: https://docs.oracle.com/cd/E11882_01/appdev.112/e40758/toc.htm
//to get an `in` filter for query `all_procedures`
//There are some extra ones you need to strip off, starting from 'ANYDATA TYPE'
var returnFilter = '';
$('.tocheader > a:nth-child(2)').each(function(idx,el){ 
    if (idx > 3)  {
        returnFilter += "'" + $(el).text().replace(/\d+ /g, '') + "',\n";
    }
});
console.log(returnFilter);
/*
'APEX_CUSTOM_AUTH',
'APEX_APPLICATION',
'APEX_ITEM',
'APEX_UTIL',
'CTX_ADM',
'CTX_CLS',
'CTX_DDL',
'CTX_DOC',
'CTX_ENTITY',
'CTX_OUTPUT',
'CTX_QUERY',
'CTX_REPORT',
'CTX_THES',
'CTX_ULEXER',
'DBMS_ADDM',
'DBMS_ADVANCED_REWRITE',
'DBMS_ADVISOR',
'DBMS_ALERT',
'DBMS_APPLICATION_INFO',
'DBMS_APPLY_ADM',
'DBMS_AQ',
'DBMS_AQADM',
'DBMS_AQELM',
'DBMS_AQIN',
'DBMS_ASSERT',
'DBMS_AUDIT_MGMT',
'DBMS_AUTO_SQLTUNE',
'DBMS_AUTO_TASK_ADMIN',
'DBMS_AUTO_TASK_IMMEDIATE',
'DBMS_AW_STATS',
'DBMS_CAPTURE_ADM',
'DBMS_CDC_PUBLISH',
'DBMS_CDC_SUBSCRIBE',
'DBMS_COMPARISON',
'DBMS_COMPRESSION',
'DBMS_CONNECTION_POOL',
'DBMS_CQ_NOTIFICATION',
'DBMS_CRYPTO',
'DBMS_CSX_ADMIN',
'DBMS_CUBE',
'DBMS_CUBE_ADVISE',
'DBMS_CUBE_LOG',
'DBMS_DATA_MINING',
'DBMS_DATA_MINING_TRANSFORM',
'DBMS_DATAPUMP',
'DBMS_DBFS_CONTENT',
'DBMS_DBFS_CONTENT_SPI',
'DBMS_DBFS_HS',
'DBMS_DBFS_SFS',
'DBMS_DB_VERSION',
'DBMS_DEBUG',
'DBMS_DDL',
'DBMS_DEFER',
'DBMS_DEFER_QUERY',
'DBMS_DEFER_SYS',
'DBMS_DESCRIBE',
'DBMS_DG',
'DBMS_DIMENSION',
'DBMS_DST',
'DBMS_DISTRIBUTED_TRUST_ADMIN',
'DBMS_EDITIONS_UTILITIES',
'DBMS_EPG',
'DBMS_ERRLOG',
'DBMS_EXPFIL',
'DBMS_FGA',
'DBMS_FILE_GROUP',
'DBMS_FILE_TRANSFER',
'DBMS_FLASHBACK',
'DBMS_FLASHBACK_ARCHIVE',
'DBMS_FREQUENT_ITEMSET',
'DBMS_HM',
'DBMS_HPROF',
'DBMS_HS_PARALLEL',
'DBMS_HS_PASSTHROUGH',
'DBMS_IOT',
'DBMS_JAVA',
'DBMS_JOB',
'DBMS_LDAP',
'DBMS_LDAP_UTL',
'DBMS_LIBCACHE',
'DBMS_LOB',
'DBMS_LOCK',
'DBMS_LOGMNR',
'DBMS_LOGMNR_D',
'DBMS_LOGSTDBY',
'DBMS_METADATA',
'DBMS_METADATA_DIFF',
'DBMS_MGD_ID_UTL',
'DBMS_MGWADM',
'DBMS_MGWMSG',
'DBMS_MONITOR',
'DBMS_MVIEW',
'DBMS_NETWORK_ACL_ADMIN',
'DBMS_NETWORK_ACL_UTILITY',
'DBMS_OBFUSCATION_TOOLKIT',
'DBMS_ODCI',
'DBMS_OFFLINE_OG',
'DBMS_OUTLN',
'DBMS_OUTPUT',
'DBMS_PARALLEL_EXECUTE',
'DBMS_PCLXUTIL',
'DBMS_PIPE',
'DBMS_PREDICTIVE_ANALYTICS',
'DBMS_PREPROCESSOR',
'DBMS_PROFILER',
'DBMS_PROPAGATION_ADM',
'DBMS_RANDOM',
'DBMS_RECTIFIER_DIFF',
'DBMS_REDEFINITION',
'DBMS_REDACT',
'DBMS_REFRESH',
'DBMS_REPAIR',
'DBMS_REPCAT',
'DBMS_REPCAT_ADMIN',
'DBMS_REPCAT_INSTANTIATE',
'DBMS_REPCAT_RGT',
'DBMS_REPUTIL',
'DBMS_RESCONFIG',
'DBMS_RESOURCE_MANAGER',
'DBMS_RESOURCE_MANAGER_PRIVS',
'DBMS_RESULT_CACHE',
'DBMS_RESUMABLE',
'DBMS_RLMGR',
'DBMS_RLS',
'DBMS_ROWID',
'DBMS_RULE',
'DBMS_RULE_ADM',
'DBMS_SCHEDULER',
'DBMS_SERVER_ALERT',
'DBMS_SERVICE',
'DBMS_SESSION',
'DBMS_SHARED_POOL',
'DBMS_SPACE',
'DBMS_SPACE_ADMIN',
'DBMS_SPM',
'DBMS_SQL',
'DBMS_SQLDIAG',
'DBMS_SQLPA',
'DBMS_SQLTUNE',
'DBMS_STAT_FUNCS',
'DBMS_STATS',
'DBMS_STORAGE_MAP',
'DBMS_STREAMS',
'DBMS_STREAMS_ADM',
'DBMS_STREAMS_ADVISOR_ADM',
'DBMS_STREAMS_AUTH',
'DBMS_STREAMS_HANDLER_ADM',
'DBMS_STREAMS_MESSAGING',
'DBMS_STREAMS_TABLESPACE_ADM',
'DBMS_TDB',
'DBMS_TRACE',
'DBMS_TRANSACTION',
'DBMS_TRANSFORM',
'DBMS_TTS',
'DBMS_TYPES',
'DBMS_UTILITY',
'DBMS_WARNING',
'DBMS_WM',
'DBMS_WORKLOAD_CAPTURE',
'DBMS_WORKLOAD_REPLAY',
'DBMS_WORKLOAD_REPOSITORY',
'DBMS_XA',
'DBMS_XDB',
'DBMS_XDB_ADMIN',
'DBMS_XDB_VERSION',
'DBMS_XDBRESOURCE',
'DBMS_XDBT',
'DBMS_XDBZ',
'DBMS_XEVENT',
'DBMS_XMLDOM',
'DBMS_XMLGEN',
'DBMS_XMLINDEX',
'DBMS_XMLPARSER',
'DBMS_XMLQUERY',
'DBMS_XMLSAVE',
'DBMS_XMLSCHEMA',
'DBMS_XMLSTORE',
'DBMS_XMLTRANSLATIONS',
'DBMS_XPLAN',
'DBMS_XSLPROCESSOR',
'DEBUG_EXTPROC',
'HTF',
'HTP',
'ORD_DICOM',
'ORD_DICOM_ADMIN',
'OWA_CACHE',
'OWA_COOKIE',
'OWA_CUSTOM',
'OWA_IMAGE',
'OWA_OPT_LOCK',
'OWA_PATTERN',
'OWA_SEC',
'OWA_TEXT',
'OWA_UTIL',
'SDO_CS',
'SDO_CSW_PROCESS',
'SDO_GCDR',
'SDO_GEOM',
'SDO_GEOR',
'SDO_GEOR_ADMIN',
'SDO_GEOR_UTL',
'SDO_LRS',
'SDO_MIGRATE',
'SDO_NET',
'SDO_NET_MEM',
'SDO_OLS',
'SDO_PC_PKG',
'SDO_SAM',
'SDO_TIN_PKG',
'SDO_TOPO',
'SDO_TOPO_MAP',
'SDO_TUNE',
'SDO_UTIL',
'SDO_WFS_LOCK',
'SDO_WFS_PROCESS',
'SEM_APIS',
'SEM_PERF',
'SEM_RDFCTX',
'SEM_RDFSA',
'UTL_COLL',
'UTL_COMPRESS',
'UTL_ENCODE',
'UTL_FILE',
'UTL_HTTP',
'UTL_I18N',
'UTL_INADDR',
'UTL_IDENT',
'UTL_LMS',
'UTL_MAIL',
'UTL_MATCH',
'UTL_NLA',
'UTL_RAW',
'UTL_RECOMP',
'UTL_REF',
'UTL_SMTP',
'UTL_SPADV',
'UTL_TCP',
'UTL_URL',
'WPG_DOCLOAD',
'ANYDATA TYPE',
'ANYDATASET TYPE',
'ANYTYPE TYPE',
'Oracle Streams AQ TYPEs',
'DBFS Content Interface Types',
'Database URI TYPEs',
'JMS Types',
'Expression Filter Types',
'Logical Change Record TYPEs',
'Oracle Multimedia ORDAudio TYPE',
'Oracle Multimedia ORDDicom TYPE',
'Oracle Multimedia ORDDoc TYPE',
'Oracle Multimedia ORDImage TYPE',
'Oracle Multimedia SQL/MM Still Image TYPES',
'Oracle Multimedia ORDVideo TYPE',
'MGD_ID Package Types',
'Rule TYPEs',
'Rules Manager Types',
'UTL Streams Types',
'XMLTYPE'
*/
