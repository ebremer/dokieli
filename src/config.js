'use strict'

import { Icon } from './template.js';

/**
 * Configuration
 */

export const Config = {
  init: function(url) {
    var contentNode = DO.U?.getContentNode(document);
    if (contentNode) {
      DO.U.setDocumentURL(url);
      DO.U.setPolyfill();
      DO.U.initUser();
      DO.U.initCurrentStylesheet();
      DO.U.setDocRefType();
      DO.U.showRefs();
      DO.U.highlightItems();
      DO.U.showAsTabs();
      DO.U.initDocumentActions();
      DO.U.showTextQuoteSelector();
      DO.U.showDocumentInfo();
      DO.U.showFragment();
      DO.U.setDocumentMode();
      DO.U.showInboxNotifications();
      DO.U.initMath();
      DO.U.initSlideshow();
    }
  },
  DocumentURL: '',
  Resource: {},
  Inbox: {},
  Notification: {},
  Subscription: {},
  Activity: {},
  Lang: document.documentElement.lang,
  DocRefType: '',
  RefType: {
    LNCS: { InlineOpen: '[', InlineClose: ']' },
    ACM: { InlineOpen: '[', InlineClose: ']' }
  },
  VerifyCitation: true,
  Stylesheets: [],
  User: {
    IRI: null,
    Role: null,
    UI: {},
    OIDC: false,
    WebIdDelegate: null
  },
  ContributorRoles: ['author', 'editor'],
  OidcPopupUrl: 'https://dokie.li/popup.html',
  LocalDocument: (document.location.protocol == 'file:'),
  UseLocalStorage: false,
  AutoSave: {
    Methods: ['localStorage', 'http'],
    Timer: 60000,
    Items: {}
  },
  ActionMessage: {
    Timer: 1500
  },
  AvatarSize: 48,
  DisableLocalStorageButtons: '<button class="local-storage-disable-html" title="Disable local storage (temporary) in the browser">' + Icon[".fas.fa-database.fa-2x"] + 'Local Storage</button>',
  EnableLocalStorageButtons: '<button class="local-storage-enable-html" title="Enable local storage (temporary) in the browser">' + Icon[".fas.fa-database.fa-2x"] + 'Local Storage</button>',
  CDATAStart: '//<![CDATA[',
  CDATAEnd: '//]]>',
  SortableList: false,
  GraphViewerAvailable: true,
  MathAvailable: (typeof MathJax !== 'undefined'),
  EditorAvailable: true,
  EditorEnabled: false,
  ContentEditable: false,
  WebExtension: ((window.chrome && chrome.runtime && chrome.runtime.id) || (typeof browser !== 'undefined' && browser.runtime && browser.runtime.id)),
  Editor: {
    headings: ["h1", "h2", "h3", "h4", "h5", "h6"],
    regexEmptyHTMLTags: /<[^\/>][^>]*><\/[^>]+>/gim,
    ButtonLabelType: 'fontawesome',
    DisableEditorButton: '<button class="editor-disable" title="Disable editor">' + Icon[".fas.fa-i-cursor.fa-2x"] + 'Edit</button>',
    EnableEditorButton: '<button class="editor-enable" title="Enable editor">' + Icon[".fas.fa-i-cursor.fa-2x"] + 'Edit</button>'
  },
  Button: {
    Close: '<button class="close" title="Close">' + Icon[".fas.fa-times.fa-2x"] + '</button>',
    Delete: '<button class="delete" title="Delete">' + Icon[".fas.fa-trash-alt"] + '</button>'
  },

  DOMNormalisation: {
    'voidElements': ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr'],
    'selfClosing': ['circle', 'ellipse', 'line', 'path', 'polygon', 'polyline', 'rect', 'stop', 'use'],
    'skipAttributes': ['aria-multiline', 'contenteditable', 'data-medium-editor-editor-index', 'data-medium-editor-element', 'data-medium-focused', 'data-placeholder', 'medium-editor-index', 'role', 'spellcheck', 'style'],
    'sortAttributes': true,
    'skipNodeWithClass': 'do',
    'skipNodeWithId': ['toc-nav'],
    'classWithChildText': {
      'class': '.do.ref',
      'element': 'mark'
    },
    'replaceClassItemWith': {
      'source': ['medium-editor-element', 'medium-editor-placeholder', 'on-document-menu'],
      'target': ''
    },
    'skipClassWithValue': '',
    'skipEscapingDataBlockTypes': ['text/turtle', 'application/ld+json', 'application/activity+json', 'application/n-triples', 'application/trig', 'text/n3']
  },

  ArticleNodeSelectors: [
    'main > article',
    'main',
    'body'
  ],

  SelectorSign: {
    "*": "🔗",
    "aside": "|",
    "audio": "🔊",
    "code": "#",
    "dl": "☝",
    "dl#document-annotation-service": "※",
    "dl#document-cited-by": "※",
    "dl#document-created": "📅",
    "dl#document-in-reply-to": "⮪",
    "dl#document-identifier": "🚩",
    "dl#document-inbox": "📥",
    "dl#document-latest-version": "∼",
    "dl#document-language": "🗺",
    "dl#document-license": "🌻",
    "dl#document-memento": "⛰",
    "dl#document-modified": "📅",
    "dl#document-original": "♁",
    "dl#document-predecessor-version": "≺",
    "dl#document-published": "📅",
    "dl#document-rights": "📜",
    "dl#document-resource-state": "🙊",
    "dl#document-see-also": "🙈",
    "dl#document-status": "🎆",
    "dl#document-timemap": "⌚",
    "dl#document-type": "🌱",
    "dfn": "📇",
    "figure": "❦",
    "footer": "⸙",
    "img": "🖼",
    "nav": "☛",
    "p": "¶",
    "pre": "🖩",
    "section": "§",
    "section#acknowledgements": "☺",
    "section#conclusions": "∴",
    "section#keywords": "🏷",
    "section#references": "※",
    "section#related-work": "⌘",
    "section#results": "∞",
    "table": "𝄜",
    "video": "🎞"
  },

  MotivationSign: {
    "oa:assessing": "✪",
    "oa:bookmarking": "🔖",
    "oa:commenting": "🗨",
    "oa:describing": "※",
    "oa:highlighting": "#",
    "oa:linking": "※",
    "oa:questioning": "?",
    "oa:replying": "💬"
  },

  DocumentDoItems: [
    'document-items',
    'embed-data-entry',
    'create-new-document',
    'open-document',
    'source-view',
    'save-as-document',
    'user-identity-input',
    'resource-browser',
    'share-resource',
    'reply-to-resource',
    'memento-document',
    'graph-view',
    'robustify-links'
  ],

  DocumentItems: [
    'authors',
    'document-identifier',
    'document-created',
    'document-modified',
    'document-published',
    'document-repository',
    'document-test-suite',
    'document-original',
    'document-memento',
    'document-latest-version',
    'document-latest-published-version',
    'document-predecessor-version',
    'document-timegate',
    'document-timemap',
    'document-derived-from',
    'document-derived-on',
    'document-editors',
    'document-authors',
    'document-language',
    'document-license',
    'document-inbox',
    'document-annotation-service',
    'document-in-reply-to',
    'document-rights',
    'document-type',
    'document-resource-state',
    'document-status',
    'document-see-also',
    'document-cited-by',
    'document-policy',
    'table-of-contents',
    'list-of-figures',
    'list-of-tables',
    'list-of-abbreviations',
    'list-of-concepts',
    'list-of-quotations',
    'table-of-requirements',
    'abstract',
    'categories-and-subject-descriptors',
    'keywords',
    'general-terms',
    'list-of-additional-concepts',

    'introduction'
  ],
  ListOfStuff: {
    'table-of-contents': { 'label': 'Contents', 'selector': 'content', 'titleSelector': 'h1' },
    'list-of-figures': { 'label': 'Figures', 'selector': 'figure', 'titleSelector': 'figcaption' },
    'list-of-tables': { 'label': 'Tables', 'selector': 'table', 'titleSelector': 'caption' },
    'list-of-abbreviations': { 'label': 'Abbreviations', 'selector': 'abbr', 'titleSelector': 'title'},
    'list-of-quotations': {'label': 'Quotations', 'selector': 'q', 'titleSelector': 'cite'},
    'list-of-concepts': {'label': 'Concepts', 'selector': '[typeof~="skos:Concept"]', 'titleSelector': '[property~="skos:prefLabel"]'},
    'table-of-requirements': {'label': 'Requirements', 'selector': '[rel~="spec:requirement"]', 'titleSelector': '[property~="spec:statement"]'},
    'references': { 'label': 'References', 'selector':'cite a', 'titleSelector': 'h2' }
  },
  CollectionItemsLimit: 20,
  ContextLength: 32,
  ProxyURL: ((window.location.hostname == 'localhost' || !navigator.onLine) ? window.location.protocol + '//' + window.location.host + '/proxy?uri=' : 'https://dokie.li/proxy?uri='),
  AuthEndpoint: ((window.location.hostname == 'localhost' || !navigator.onLine) ? window.location.protocol + '//' + window.location.host + '/' : 'https://dokie.li/'),
  NotificationLicense: 'https://creativecommons.org/publicdomain/zero/1.0/',
  License: {
    "https://creativecommons.org/publicdomain/zero/1.0/": {'name': 'CC0 1.0', 'description': 'Creative Commons CC0 1.0 Universal'},
    "https://creativecommons.org/licenses/by/4.0/": {'name': 'CC BY 4.0', 'description': 'Creative Commons Attribution 4.0 International'},
    "https://creativecommons.org/licenses/by-sa/4.0/": {'name': 'CC BY-SA 4.0', 'description': 'Creative Commons Attribution-ShareAlike 4.0 International'},
    "https://creativecommons.org/licenses/by-nc/4.0/": {'name': 'CC BY-NC 4.0', 'description': 'Creative Commons Attribution-NonCommercial 4.0 International'},
    "https://creativecommons.org/licenses/by-nd/4.0/": {'name': 'CC BY-ND 4.0', 'description': 'Creative Commons Attribution-NoDerivatives 4.0 International'},
    "https://creativecommons.org/licenses/by-nc-sa/4.0/": {'name': 'CC BY-NC-SA 4.0', 'description': 'Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International'},
    "https://creativecommons.org/licenses/by-nc-nd/4.0/": {'name': 'CC BY-NC-ND 4.0', 'description': 'Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International'}
  },
  ResourceType: {
    "http://schema.org/Article": {'name': 'Article', 'description': 'An article, such as a news article or piece of investigative report.'},
    "http://schema.org/BlogPosting": {'name': 'BlogPosting', 'description': 'A blog post.'},
    "http://schema.org/Course": {'name': 'Course', 'description': 'A description of an educational course.'},    
    "http://schema.org/Guide": {'name': 'Guide', 'description': 'Guide is a page or article that recommends specific products or services, or aspects of a thing for a user to consider.'},
    "http://schema.org/NewsArticle": {'name': 'NewsArticle', 'description': 'A NewsArticle is an article whose content reports news, or provides background context and supporting materials for understanding the news.'},
    "http://schema.org/Recipe": {'name': 'Recipe', 'description': 'A recipe.'},
    "http://schema.org/Review": {'name': 'Review', 'description': 'A review of an item - for example, of a restaurant, movie, or store.'},
    "http://schema.org/ScholarlyArticle": {'name': 'ScholarlyArticle', 'description': 'A scholarly article.'},
    "http://purl.org/ontology/bibo/Slideshow": {'name': 'Slideshow', 'description': 'A presentation of a series of slides, usually presented in front of an audience with written text and images.'},
    "http://usefulinc.com/ns/doap#Specification": {'name': 'Specification', 'description': 'A specification of a system\'s aspects, technical or otherwise.'},
    "http://schema.org/TechArticle": {'name': 'TechArticle', 'description': 'A technical article - Example: How-to (task) topics, step-by-step, procedural troubleshooting, specifications, etc.'},
    "http://schema.org/Thesis": {'name': 'Thesis', 'description': 'A thesis or dissertation document submitted in support of candidature for an academic degree or professional qualification.'},
    "http://schema.org/Trip": {'name': 'Trip', 'description': 'A trip or journey. An itinerary of visits to one or more places.'}
  },
  PublicationStatus: {
    "http://purl.org/spar/pso/draft": { 'name': 'Draft', 'description': 'The status of a work (for example a document or a dataset) prior to completion and publication.' },
    "http://purl.org/spar/pso/published": { 'name': 'Published', 'description': 'The status of material (for example a document or a dataset) that has been published, i.e. made available for people to access, read or use, either freely or for a purchase price or an access fee.' }
  },
  Citation: {
    'http://purl.org/spar/cito/agreesWith': 'agrees with',
    'http://purl.org/spar/cito/cites': 'cites',
    'http://purl.org/spar/cito/citesAsAuthority': 'cites as authority',
    'http://purl.org/spar/cito/citesAsDataSource': 'cites as data source',
    'http://purl.org/spar/cito/citesAsEvidence': 'cites as evidence',
    'http://purl.org/spar/cito/citesAsMetadataDocument': 'cites as metadata document',
    'http://purl.org/spar/cito/citesAsPotentialSolution': 'cites as potential solution',
    'http://purl.org/spar/cito/citesAsRecommendedReading': 'cites as potential reading',
    'http://purl.org/spar/cito/citesAsRelated': 'cites as related',
    'http://purl.org/spar/cito/citesAsSourceDocument': 'cites as source document',
    'http://purl.org/spar/cito/citesForInformation': 'cites for information',
    'http://purl.org/spar/cito/compiles': 'compiles',
    'http://purl.org/spar/cito/confirms': 'confirms',
    'http://purl.org/spar/cito/containsAssertionFrom': 'contains assertion from',
    'http://purl.org/spar/cito/corrects': 'corrects',
    'http://purl.org/spar/cito/credits': 'credits',
    'http://purl.org/spar/cito/critiques': 'critiques',
    'http://purl.org/spar/cito/derides': 'derides',
    'http://purl.org/spar/cito/describes': 'describes',
    'http://purl.org/spar/cito/disagreesWith': 'disagrees with',
    'http://purl.org/spar/cito/discusses': 'discusses',
    'http://purl.org/spar/cito/disputes': 'disputes',
    'http://purl.org/spar/cito/documents': 'documents',
    'http://purl.org/spar/cito/extends': 'extends',
    'http://purl.org/spar/cito/includesExcerptFrom': 'includes excerpt from',
    'http://purl.org/spar/cito/includesQuotationFrom': 'includes quotation from',
    'http://purl.org/spar/cito/linksTo': 'links to',
    'http://purl.org/spar/cito/obtainsBackgroundFrom': 'obtains background from',
    'http://purl.org/spar/cito/obtainsSupportFrom': 'obtains support from',
    'http://purl.org/spar/cito/parodies': 'parodies',
    'http://purl.org/spar/cito/plagiarizes': 'plagiarizes',
    'http://purl.org/spar/cito/qualifies': 'qualifies',
    'http://purl.org/spar/cito/refutes': 'refutes',
    'http://purl.org/spar/cito/repliesTo': 'replies to',
    'http://purl.org/spar/cito/retracts': 'retracts',
    'http://purl.org/spar/cito/reviews': 'reviews',
    'http://purl.org/spar/cito/ridicules': 'ridicules',
    'http://purl.org/spar/cito/speculatesOn': 'speculates on',
    'http://purl.org/spar/cito/supports': 'supports',
    'http://purl.org/spar/cito/updates': 'updates',
    'http://purl.org/spar/cito/usesConclusionsFrom': 'uses conclusions from',
    'http://purl.org/spar/cito/usesDataFrom': 'uses data from',
    'http://purl.org/spar/cito/usesMethodIn': 'uses method in'
  },

  SKOSClasses: {
    'http://www.w3.org/2004/02/skos/core#ConceptScheme': 'Concept Scheme',
    'http://www.w3.org/2004/02/skos/core#Collection': 'Collection',
    'http://www.w3.org/2004/02/skos/core#OrderedCollection': 'Ordered Collection',
    'http://www.w3.org/2004/02/skos/core#Concept': 'Concept'
  },

  TestDescriptionReviewStatus: {
    'http://www.w3.org/2006/03/test-description#accepted': "the item has gone through a first review, which shows it as valid for further processing",
    'http://www.w3.org/2006/03/test-description#approved': "the item has gone through the review process and was approved",
    'http://www.w3.org/2006/03/test-description#assigned': "a more specific review of the item has been assigned to someone",
    'http://www.w3.org/2006/03/test-description#onhold': "the item had already gone through the review process, but the results of the review need to be re-assessed due to new input",
    'http://www.w3.org/2006/03/test-description#rejected': "the item has gone through the review process and was rejected",
    'http://www.w3.org/2006/03/test-description#unreviewed': "the item has been proposed, but hasn't been reviewed (e.g. for completeness) yet"
  },

  Actor: {
    Type: {
      "http://purl.org/dc/terms/Agent":"Agent",
      "http://schema.org/Person":"Person",
      "http://www.w3.org/2006/vcard/ns#Group":"Group",
      "http://www.w3.org/2006/vcard/ns#Individual":"Individual",
      "http://www.w3.org/2006/vcard/ns#Organization":"Organization",
      "http://www.w3.org/2006/vcard/ns#VCard":"VCard",
      "http://xmlns.com/foaf/0.1/Agent":"Agent",
      "http://xmlns.com/foaf/0.1/Group":"Group",
      "http://xmlns.com/foaf/0.1/Organization":"Organization",
      "http://xmlns.com/foaf/0.1/Person":"Person",
      "https://www.w3.org/ns/activitystreams#Application":"Application",
      "https://www.w3.org/ns/activitystreams#Group":"Group",
      "https://www.w3.org/ns/activitystreams#Organization":"Organization",
      "https://www.w3.org/ns/activitystreams#Person":"Person",
      "https://www.w3.org/ns/activitystreams#Service":"Service"
    },

    Property: {
      "http://purl.org/dc/terms/creator":"creator",
      "http://schema.org/author":"author",
      "http://schema.org/contributor":"contributor",
      "http://schema.org/creator":"creator",
      "http://schema.org/editor":"editor",
      "http://xmlns.com/foaf/0.1/knows":"knows",
      "https://www.w3.org/ns/activitystreams#actor":"actor"
    }
  },

  MediaTypes: {
    RDF: ['text/turtle', 'application/ld+json', 'application/activity+json', 'text/html', 'image/svg+xml', 'text/markdown'],

    Binary: ['image/png', 'image/jpeg', 'image/gif', 'image/x-icon'],

    Feed: ['application/atom+xml', 'application/rss+xml'],

    Markup: ['text/html', 'image/svg+xml', 'text/markdown'],

    MultiMediaType: ['audio', 'image', 'video']
  },

  Prefixes: {
    'xsd': 'http://www.w3.org/2001/XMLSchema#',
    'rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
    'as': 'https://www.w3.org/ns/activitystreams#',
    'oa': 'http://www.w3.org/ns/oa#',
    'schema': 'http://schema.org/',
    'cito': 'http://purl.org/spar/cito/'
  },

  Vocab: {
    "rdftype": { "@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type", "@type": "@id", "@array": true },
    "rdffirst": { "@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#first", "@type": "@id" },
    "rdfrest": { "@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#rest", "@type": "@id" },
    "rdfvalue": "http://www.w3.org/1999/02/22-rdf-syntax-ns#value",
    "rdfslabel": "http://www.w3.org/2000/01/rdf-schema#label",
    "rdfsseeAlso": { "@id": "http://www.w3.org/2000/01/rdf-schema#seeAlso", "@type": "@id", "@array": true },

    "owlsameAs": { "@id": "http://www.w3.org/2002/07/owl#sameAs", "@type": "@id", "@array": true },

    "foafAgent": { "@id": "http://xmlns.com/foaf/0.1/Agent", "@type": "@id" },
    "foafPerson": { "@id": "http://xmlns.com/foaf/0.1/Person", "@type": "@id" },
    "foafGroup": { "@id": "http://xmlns.com/foaf/0.1/Group", "@type": "@id" },
    "foafOrganization": { "@id": "http://xmlns.com/foaf/0.1/Organization", "@type": "@id" },
    "foafname": "http://xmlns.com/foaf/0.1/name",
    "foaffamilyName": "http://xmlns.com/foaf/0.1/familyName",
    "foafgivenName": "http://xmlns.com/foaf/0.1/givenName",
    "foafhomepage": { "@id": "http://xmlns.com/foaf/0.1/homepage", "@type": "@id" },
    "foafweblog": { "@id": "http://xmlns.com/foaf/0.1/weblog", "@type": "@id" },
    "foafimg": { "@id": "http://xmlns.com/foaf/0.1/img", "@type": "@id" },
    "foafdepiction": { "@id": "http://xmlns.com/foaf/0.1/depiction", "@type": "@id" },
    "foafnick": "http://xmlns.com/foaf/0.1/nick",
    "foafmaker": { "@id": "http://xmlns.com/foaf/0.1/maker", "@type": "@id" },
    "foafknows": { "@id": "http://xmlns.com/foaf/0.1/knows", "@type": "@id", "@array": true },
    "foafprimaryTopic": { "@id": "http://xmlns.com/foaf/0.1/primaryTopic", "@type": "@id" },
    "foafmbox": "http://xmlns.com/foaf/0.1/mbox",

    "vcardVCard": { "@id": "http://www.w3.org/2006/vcard/ns#VCard", "@type": "@id" },
    "vcardIndividual": { "@id": "http://www.w3.org/2006/vcard/ns#Individual", "@type": "@id" },
    "vcardGroup": { "@id": "http://www.w3.org/2006/vcard/ns#Group", "@type": "@id" },
    "vcardOrganization": { "@id": "http://www.w3.org/2006/vcard/ns#Organization", "@type": "@id" },
    "vcardfn": "http://www.w3.org/2006/vcard/ns#fn",
    "vcardfamilyname": "http://www.w3.org/2006/vcard/ns#family-name",
    "vcardgivenname": "http://www.w3.org/2006/vcard/ns#given-name",
    "vcardnickname": "http://www.w3.org/2006/vcard/ns#nickname",
    "vcardurl": { "@id": "http://www.w3.org/2006/vcard/ns#url", "@type": "@id" },
    "vcardphoto": { "@id": "http://www.w3.org/2006/vcard/ns#photo", "@type": "@id" },
    "vcardhasPhoto": { "@id": "http://www.w3.org/2006/vcard/ns#hasPhoto", "@type": "@id" },

    "schemaPerson": { "@id": "http://schema.org/Person", "@type": "@id" },
    "schemaOrganization": { "@id": "http://schema.org/Person", "@type": "@id" },
    "schemaDataset": { "@id": "http://schema.org/Dataset", "@type": "@id"},
    "schemaname": "http://schema.org/name",
    "schemafamilyName": "http://schema.org/familyName",
    "schemagivenName": "http://schema.org/givenName",
    "schemaurl": { "@id": "http://schema.org/url", "@type": "@id" },
    "schemaimage": { "@id": "http://schema.org/image", "@type": "@id" },
    "schemacreator": { "@id": "http://schema.org/creator", "@type": "@id", "@array": true },
    "schemaauthor": { "@id": "http://schema.org/author", "@type": "@id", "@array": true },
    "schemacontributor": { "@id": "http://schema.org/contributor", "@type": "@id", "@array": true },
    "schemaeditor": { "@id": "http://schema.org/editor", "@type": "@id", "@array": true },
    "schemaemail": "http://schema.org/email",
    "schemainLanguage": "http://schema.org/inLanguage",
    "schemalicense": { "@id": "http://schema.org/license", "@type": "@id" },
    "schemacitation": { "@id": "http://schema.org/citation", "@type": "@id", "@array": true },
    "schemaknows": { "@id": "http://schema.org/knows", "@type": "@id", "@array": true },
    "schemadateCreated": "http://schema.org/dateCreated",
    "schemadateModified": "http://schema.org/dateModified",
    "schemadatePublished": "http://schema.org/datePublished",
    "schemaabstract": "http://schema.org/abstract",
    "schemadescription": "http://schema.org/description",
    "schemahasPart": { "@id": "http://schema.org/hasPart", "@type": "@id", "@array": true }, 
    "schemaisPartOf": { "@id": "http://schema.org/isPartOf", "@type": "@id", "@array": true },
    "schemaArticle": { "@id": "http://schema.org/Article", "@type": "@id" },
    "schemaScholarlyArticle": { "@id": "http://schema.org/ScholarlyArticle", "@type": "@id" },
    "schemapotentialAction": { "@id": "http://schema.org/potentialAction", "@type": "@id", "@array": true },
    "schemaViewAction": { "@id": "http://schema.org/ViewAction" },
    "schematarget": { "@id": "http://schema.org/target" },
    "schemaobject": { "@id": "http://schema.org/object" },

    "dcelementstitle": "http://purl.org/dc/elements/1.1/title",
    "dcelementsdescription": "http://purl.org/dc/elements/1.1/description",

    "dctermsAgent": { "@id": "http://purl.org/dc/terms/Agent", "@type": "@id" },
    "dctermstitle": "http://purl.org/dc/terms/title",
    "dctermsdescription": "http://purl.org/dc/terms/description",
    "dctermscreator": { "@id": "http://purl.org/dc/terms/creator", "@type": "@id", "@array": true },
    "dctermsdate": "http://purl.org/dc/terms/date",
    "dctermsissued": "http://purl.org/dc/terms/issued",
    "dctermscreated": "http://purl.org/dc/terms/created",
    "dctermslanguage": "http://purl.org/dc/terms/language",
    "dctermslicense": { "@id": "http://purl.org/dc/terms/license", "@type": "@id" },
    "dctermsrights": { "@id": "http://purl.org/dc/terms/rights", "@type": "@id" },
    "dctermsconformsTo": { "@id": "http://purl.org/dc/terms/conformsTo", "@type": "@id" },
    "dctermshasPart": { "@id": "http://purl.org/dc/terms/hasPart", "@type": "@id", "@array": true },
    "dctermsisPartOf": { "@id": "http://purl.org/dc/terms/isPartOf", "@type": "@id", "@array": true },
    "dctermsreferences": { "@id": "http://purl.org/dc/terms/references", "@type": "@id", "@array": true },

    "cclicense": { "@id": "http://creativecommons.org/ns#license", "@type": "@id" },
    "xhvlicense": { "@id": "http://www.w3.org/1999/xhtml/vocab#license", "@type": "@id" },

    "skosConceptScheme": { "@id": "http://www.w3.org/2004/02/skos/core#ConceptScheme", "@type": "@id" },
    "skosCollection": { "@id": "http://www.w3.org/2004/02/skos/core#Collection", "@type": "@id" },
    "skosOrderedCollection": { "@id": "http://www.w3.org/2004/02/skos/core#OrderedCollection", "@type": "@id" },
    "skosConcept": { "@id": "http://www.w3.org/2004/02/skos/core#Concept", "@type": "@id" },
    "skosdefinition": { "@id": "http://www.w3.org/2004/02/skos/core#definition", "@type": "@id", "@array": true },
    "skosaltLabel": { "@id": "http://www.w3.org/2004/02/skos/core#altLabel", "@type": "@id", "@array": true },
    "skosprefLabel": { "@id": "http://www.w3.org/2004/02/skos/core#prefLabel", "@type": "@id", "@array": true },
    "skosmember": { "@id": "http://www.w3.org/2004/02/skos/core#member", "@type": "@id", "@array": true },
    "skosnotation": { "@id": "http://www.w3.org/2004/02/skos/core#notation", "@type": "@id", "@array": true },
    "skosnote": { "@id": "http://www.w3.org/2004/02/skos/core#note", "@type": "@id", "@array": true },
    "skoshasTopConcept": { "@id": "http://www.w3.org/2004/02/skos/core#hasTopConcept", "@type": "@id", "@array": true },
    "skostopConceptOf": { "@id": "http://www.w3.org/2004/02/skos/core#topConceptOf", "@type": "@id", "@array": true },
    "skosbroadMatch": { "@id": "http://www.w3.org/2004/02/skos/core#broadMatch", "@type": "@id", "@array": true },
    "skoscloseMatch": { "@id": "http://www.w3.org/2004/02/skos/core#closeMatch", "@type": "@id", "@array": true },
    "skosexactMatch": { "@id": "http://www.w3.org/2004/02/skos/core#exactMatch", "@type": "@id", "@array": true },
    "skosnarrowMatch": { "@id": "http://www.w3.org/2004/02/skos/core#narrowMatch", "@type": "@id", "@array": true },
    "skosrelatedMatch": { "@id": "http://www.w3.org/2004/02/skos/core#relatedMatch", "@type": "@id", "@array": true },

    "provgeneratedAtTime": "http://www.w3.org/ns/prov#generatedAtTime",
    "provwasRevisionOf": { "@id": "http://www.w3.org/ns/prov#wasRevisionOf", "@type": "@id" },

    "refPeriod": "http://purl.org/linked-data/sdmx/2009/dimension#refPeriod",
    "obsValue": "http://purl.org/linked-data/sdmx/2009/measure#obsValue",

    "biboeditor": { "@id": "http://purl.org/ontology/bibo/editor", "@type": "@id", "@array": true },
    "biboauthorList": { "@id": "http://purl.org/ontology/bibo/authorList", "@type": "@id" },
    "bibocontributorList": { "@id": "http://purl.org/ontology/bibo/contributorList", "@type": "@id" },
    "biboeditorList": { "@id": "http://purl.org/ontology/bibo/editorList", "@type": "@id" },

    "pimstorage": { "@id": "http://www.w3.org/ns/pim/space#storage", "@type": "@id", "@array": true },
    "pimpreferencesFile": { "@id": "http://www.w3.org/ns/pim/space#preferencesFile", "@type": "@id" },

    "pimpersistencePolicy": { "@id": "http://www.w3.org/2000/10/swap/pim/doc#persistencePolicy", "@type": "@id", "@array": true },

    "aclAuthorization" : { "@id": "http://www.w3.org/ns/auth/acl#Authorization", "@type": "@id" },
    "aclRead" : { "@id": "http://www.w3.org/ns/auth/acl#Read", "@type": "@id" },
    "aclWrite" : { "@id": "http://www.w3.org/ns/auth/acl#Write", "@type": "@id" },
    "aclAppend" : { "@id": "http://www.w3.org/ns/auth/acl#Append", "@type": "@id" },
    "aclControl" : { "@id": "http://www.w3.org/ns/auth/acl#Control", "@type": "@id" },
    "aclaccessTo": {"@id": "http://www.w3.org/ns/auth/acl#accessTo", "@type": "@id", "@array": true },
    "acldefault": {"@id": "http://www.w3.org/ns/auth/acl#default", "@type": "@id", "@array": true },
    "aclagent": {"@id": "http://www.w3.org/ns/auth/acl#agent", "@type": "@id", "@array": true },
    "aclmode": {"@id": "http://www.w3.org/ns/auth/acl#mode", "@type": "@id", "@array": true },
    "acldelegates" : { "@id": "http://www.w3.org/ns/auth/acl#delegates", "@type": "@id", "@array": true },

    "solidpreferredProxy": "http://www.w3.org/ns/solid/terms#preferredProxy",
    "solidpreferredPolicy": { "@id": "http://www.w3.org/ns/solid/terms#preferredPolicy", "@type": "@id" },
    "solidforClass": { "@id": "http://www.w3.org/ns/solid/terms#forClass", "@type": "@id" },
    "solidinstanceContainer": { "@id": "http://www.w3.org/ns/solid/terms#instanceContainer", "@type": "@id" },
    "solidpublicTypeIndex": { "@id": "http://www.w3.org/ns/solid/terms#publicTypeIndex", "@type": "@id" },
    "solidprivateTypeIndex": { "@id": "http://www.w3.org/ns/solid/terms#privateTypeIndex", "@type": "@id" },
    "solidowner": { "@id": "http://www.w3.org/ns/solid/terms#owner", "@type": "@id", "@array": true },
    "solidstorageDescription": { "@id": "http://www.w3.org/ns/solid/terms#storageDescription", "@type": "@id", "@array": true },

    "oaAnnotation": { "@id": "http://www.w3.org/ns/oa#Annotation", "@type": "@id" },
    "oahasBody": { "@id": "http://www.w3.org/ns/oa#hasBody", "@type": "@id" },
    "oahasTarget": { "@id": "http://www.w3.org/ns/oa#hasTarget", "@type": "@id" },
    "oahasSource": { "@id": "http://www.w3.org/ns/oa#hasSource", "@type": "@id" },
    "oahasSelector": { "@id": "http://www.w3.org/ns/oa#hasSelector", "@type": "@id" },
    "oarefinedBy": { "@id": "http://www.w3.org/ns/oa#refinedBy", "@type": "@id" },
    "oaexact": "http://www.w3.org/ns/oa#exact",
    "oaprefix": "http://www.w3.org/ns/oa#prefix",
    "oasuffix": "http://www.w3.org/ns/oa#suffix",
    "oamotivatedBy": { "@id": "http://www.w3.org/ns/oa#motivatedBy", "@type": "@id" },
    "oaannotationService": { "@id": "http://www.w3.org/ns/oa#annotationService", "@type": "@id", "@array": true },

    "asApplication": { "@id": "https://www.w3.org/ns/activitystreams#Application", "@type": "@id" },
    "asGroup": { "@id": "https://www.w3.org/ns/activitystreams#Group", "@type": "@id" },
    "asOrganization": { "@id": "https://www.w3.org/ns/activitystreams#Organization", "@type": "@id" },
    "asPerson": { "@id": "https://www.w3.org/ns/activitystreams#Person", "@type": "@id" },
    "asService": { "@id": "https://www.w3.org/ns/activitystreams#Service", "@type": "@id" },
    "asinbox": { "@id": "https://www.w3.org/ns/activitystreams#inbox", "@type": "@id", "@array": true },
    "assubject": { "@id": "https://www.w3.org/ns/activitystreams#subject", "@type": "@id", "@array": true },
    "asobject": { "@id": "https://www.w3.org/ns/activitystreams#object", "@type": "@id", "@array": true },
    "astarget": { "@id": "https://www.w3.org/ns/activitystreams#target", "@type": "@id", "@array": true },
    "asrelationship": { "@id": "https://www.w3.org/ns/activitystreams#relationship", "@type": "@id", "@array": true },
    "ascontext": { "@id": "https://www.w3.org/ns/activitystreams#context", "@type": "@id", "@array": true },
    "asinReplyTo": { "@id": "https://www.w3.org/ns/activitystreams#inReplyTo", "@type": "@id", "@array": true },
    "asactor": { "@id": "https://www.w3.org/ns/activitystreams#actor", "@type": "@id", "@array": true },
    "asupdated": "https://www.w3.org/ns/activitystreams#updated",
    "aspublished": "https://www.w3.org/ns/activitystreams#published",
    "assummary": "https://www.w3.org/ns/activitystreams#summary",
    "ascontent": "https://www.w3.org/ns/activitystreams#content",
    "asname": "https://www.w3.org/ns/activitystreams#name",
    "asicon": { "@id": "https://www.w3.org/ns/activitystreams#icon", "@type": "@id" },
    "asimage": { "@id": "https://www.w3.org/ns/activitystreams#image", "@type": "@id" },
    "asurl": { "@id": "https://www.w3.org/ns/activitystreams#url", "@type": "@id" },
    "ashref": { "@id": "https://www.w3.org/ns/activitystreams#href", "@type": "@id" },
    "asfollowing": { "@id": "https://www.w3.org/ns/activitystreams#following", "@type": "@id" },
    "asoutbox": { "@id": "https://www.w3.org/ns/activitystreams#outbox", "@type": "@id", "@array": true },
    "asitems": { "@id": "https://www.w3.org/ns/activitystreams#items", "@type": "@id", "@array": true },
    "asorderedItems": { "@id": "https://www.w3.org/ns/activitystreams#orderedItems", "@type": "@id", "@array": true },
    "astag": { "@id": "https://www.w3.org/ns/activitystreams#tag", "@type": "@id", "@array": true },
    "astotalItems": "https://www.w3.org/ns/activitystreams#totalItems",
    "asfirst": { "@id": "https://www.w3.org/ns/activitystreams#first", "@type": "@id" },
    "asnext": { "@id": "https://www.w3.org/ns/activitystreams#next", "@type": "@id" },
    "asCollection": { "@id": "https://www.w3.org/ns/activitystreams#Collection", "@type": "@id" },
    "asCollectionPage": { "@id": "https://www.w3.org/ns/activitystreams#CollectionPage", "@type": "@id" },
    "asOrderedCollection": { "@id": "https://www.w3.org/ns/activitystreams#OrderedCollection", "@type": "@id" },
    "asOrderedCollectionPage": { "@id": "https://www.w3.org/ns/activitystreams#OrderedCollectionPage", "@type": "@id" },
    "asAnnounce": { "@id": "https://www.w3.org/ns/activitystreams#Announce", "@type": "@id" },
    "asAudio": { "@id": "https://www.w3.org/ns/activitystreams#Audio", "@type": "@id" },
    "asImage": { "@id": "https://www.w3.org/ns/activitystreams#Image", "@type": "@id" },
    "asVideo": { "@id": "https://www.w3.org/ns/activitystreams#Video", "@type": "@id" },

    "siocreplyof": { "@id": "http://rdfs.org/sioc/ns#reply_of", "@type": "@id", "@array": true },
    "siocavatar": { "@id": "http://rdfs.org/sioc/ns#avatar", "@type": "@id" },

    "ldpinbox": { "@id": "http://www.w3.org/ns/ldp#inbox", "@type": "@id", "@array": true },
    "ldpcontains": { "@id": "http://www.w3.org/ns/ldp#contains", "@type": "@id", "@array": true },
    "ldpResource": { "@id": "http://www.w3.org/ns/ldp#Resource", "@type": "@id" },
    "ldpContainer": { "@id": "http://www.w3.org/ns/ldp#Container", "@type": "@id" },
    "ldpBasicContainer": { "@id": "http://www.w3.org/ns/ldp#BasicContainer", "@type": "@id" },
    "ldpRDFSource": { "@id": "http://www.w3.org/ns/ldp#RDFSource", "@type": "@id" },
    "ldpNonRDFSource": { "@id": "http://www.w3.org/ns/ldp#NonRDFSource", "@type": "@id" },

    "memOriginalResource": { "@id": "http://mementoweb.org/ns#OriginalResource", "@type": "@id" },
    "memMemento": { "@id": "http://mementoweb.org/ns#Memento", "@type": "@id" },
    "memoriginal": { "@id": "http://mementoweb.org/ns#original", "@type": "@id" },
    "memmemento": { "@id": "http://mementoweb.org/ns#memento", "@type": "@id" },
    "memtimegate": { "@id": "http://mementoweb.org/ns#timegate", "@type": "@id" },
    "memtimemap": { "@id": "http://mementoweb.org/ns#timemap", "@type": "@id" },
    "memmementoDateTime": "http://mementoweb.org/ns#mementoDateTime",

    "notifyWebSocketChannel2023": { "@id": "http://www.w3.org/ns/solid/notifications#WebSocketChannel2023", "@type": "@id" },
    "notifysubscription": { "@id": "http://www.w3.org/ns/solid/notifications#subscription", "@type": "@id", "@array": true },
    "notifychannel": { "@id": "http://www.w3.org/ns/solid/notifications#channel", "@type": "@id", "@array": true },
    "notifychannelType": { "@id": "http://www.w3.org/ns/solid/notifications#channelType", "@type": "@id" },
    "notifyreceiveFrom": { "@id": "http://www.w3.org/ns/solid/notifications#receiveFrom", "@type": "@id" },
    "notifysendTo": { "@id": "http://www.w3.org/ns/solid/notifications#sendTo", "@type": "@id" },
    "notifysender": { "@id": "http://www.w3.org/ns/solid/notifications#sender", "@type": "@id" },
    "notifyfeature": { "@id": "http://www.w3.org/ns/solid/notifications#feature", "@type": "@id", "@array": true },
    "notifyaccept": "http://www.w3.org/ns/solid/notifications#accept",
    "notifystartAt": "http://www.w3.org/ns/solid/notifications#startAt",
    "notifyendAt": "http://www.w3.org/ns/solid/notifications#endAt",
    "notifyrate": "http://www.w3.org/ns/solid/notifications#rate",
    "notifystate": "http://www.w3.org/ns/solid/notifications#state",

    "odrlAgreement": { "@id": "http://www.w3.org/ns/odrl/2/Agreement", "@type": "@id" },
    "odrlAssertion": { "@id": "http://www.w3.org/ns/odrl/2/Assertion", "@type": "@id" },
    "odrlOffer": { "@id": "http://www.w3.org/ns/odrl/2/Offer", "@type": "@id" },
    "odrlPolicy": { "@id": "http://www.w3.org/ns/odrl/2/Policy", "@type": "@id" },
    "odrlPrivacy": { "@id": "http://www.w3.org/ns/odrl/2/Privacy", "@type": "@id" },
    "odrlRequest": { "@id": "http://www.w3.org/ns/odrl/2/Request", "@type": "@id" },
    "odrlSet": { "@id": "http://www.w3.org/ns/odrl/2/Set", "@type": "@id" },
    "odrlTicket": { "@id": "http://www.w3.org/ns/odrl/2/Ticket", "@type": "@id" },
    "odrlaction": { "@id": "http://www.w3.org/ns/odrl/2/action", "@type": "@id", "@array": true },
    "odrlassignee": { "@id": "http://www.w3.org/ns/odrl/2/assignee", "@type": "@id", "@array": true },
    "odrlassigner": { "@id": "http://www.w3.org/ns/odrl/2/assigner", "@type": "@id", "@array": true },
    "odrlhasPolicy": { "@id": "http://www.w3.org/ns/odrl/2/hasPolicy", "@type": "@id", "@array": true },
    "odrlpermission": { "@id": "http://www.w3.org/ns/odrl/2/permission", "@type": "@id", "@array": true },
    "odrlprohibition": { "@id": "http://www.w3.org/ns/odrl/2/prohibition", "@type": "@id", "@array": true },
    "odrltarget": { "@id": "http://www.w3.org/ns/odrl/2/target", "@type": "@id" },
    "odrluid": { "@id": "http://www.w3.org/ns/odrl/2/uid", "@type": "@id" },

    "relpredecessorversion": { "@id": "https://www.w3.org/ns/iana/link-relations/relation#predecessor-version", "@type": "@id" },
    "rellatestversion": { "@id": "https://www.w3.org/ns/iana/link-relations/relation#latest-version", "@type": "@id" },

    "qbDataSet": { "@id": "http://purl.org/linked-data/cube#DataSet", "@type": "@id"},
    "dcatDataset": { "@id": "http://www.w3.org/ns/dcat#Dataset", "@type": "@id"},
    "voidDataset": { "@id": "http://rdfs.org/ns/void#Dataset", "@type": "@id"},

    "psodraft": { "@id": "http://purl.org/spar/pso/draft", "@type": "@id" },
    "psopublished": { "@id": "http://purl.org/spar/pso/published", "@type": "@id" },

    "citoagreesWith": { "@id": "http://purl.org/spar/cito/agreesWith", "@type": "@id", "@array": true },
    "citocites": { "@id": "http://purl.org/spar/cito/cites", "@type": "@id", "@array": true },
    "citocitesAsAuthority": { "@id": "http://purl.org/spar/cito/citesAsAuthority", "@type": "@id", "@array": true },
    "citocitesAsDataSource": { "@id": "http://purl.org/spar/cito/citesAsDataSource", "@type": "@id", "@array": true },
    "citocitesAsEvidence": { "@id": "http://purl.org/spar/cito/citesAsEvidence", "@type": "@id", "@array": true },
    "citocitesAsMetadataDocument": { "@id": "http://purl.org/spar/cito/citesAsMetadataDocument", "@type": "@id", "@array": true },
    "citocitesAsPotentialSolution": { "@id": "http://purl.org/spar/cito/citesAsPotentialSolution", "@type": "@id", "@array": true },
    "citocitesAsRecommendedReading": { "@id": "http://purl.org/spar/cito/citesAsRecommendedReading", "@type": "@id", "@array": true },
    "citocitesAsRelated": { "@id": "http://purl.org/spar/cito/citesAsRelated", "@type": "@id", "@array": true },
    "citocitesAsSourceDocument": { "@id": "http://purl.org/spar/cito/citesAsSourceDocument", "@type": "@id", "@array": true },
    "citocitesForInformation": { "@id": "http://purl.org/spar/cito/citesForInformation", "@type": "@id", "@array": true },
    "citocompiles": { "@id": "http://purl.org/spar/cito/compiles", "@type": "@id", "@array": true },
    "citoconfirms": { "@id": "http://purl.org/spar/cito/confirms", "@type": "@id", "@array": true },
    "citocontainsAssertionFrom": { "@id": "http://purl.org/spar/cito/containsAssertionFrom", "@type": "@id", "@array": true },
    "citocorrects": { "@id": "http://purl.org/spar/cito/corrects", "@type": "@id", "@array": true },
    "citocredits": { "@id": "http://purl.org/spar/cito/credits", "@type": "@id", "@array": true },
    "citocritiques": { "@id": "http://purl.org/spar/cito/critiques", "@type": "@id", "@array": true },
    "citoderides": { "@id": "http://purl.org/spar/cito/derides", "@type": "@id", "@array": true },
    "citodescribes": { "@id": "http://purl.org/spar/cito/describes", "@type": "@id", "@array": true },
    "citodisagreesWith": { "@id": "http://purl.org/spar/cito/disagreesWith", "@type": "@id", "@array": true },
    "citodiscusses": { "@id": "http://purl.org/spar/cito/discusses", "@type": "@id", "@array": true },
    "citodisputes": { "@id": "http://purl.org/spar/cito/disputes", "@type": "@id", "@array": true },
    "citodocuments": { "@id": "http://purl.org/spar/cito/documents", "@type": "@id", "@array": true },
    "citoextends": { "@id": "http://purl.org/spar/cito/extends", "@type": "@id", "@array": true },
    "citoincludesExcerptFrom": { "@id": "http://purl.org/spar/cito/includesExcerptFrom", "@type": "@id", "@array": true },
    "citoincludesQuotationFrom": { "@id": "http://purl.org/spar/cito/includesQuotationFrom", "@type": "@id", "@array": true },
    "citolinksTo": { "@id": "http://purl.org/spar/cito/linksTo", "@type": "@id", "@array": true },
    "citoobtainsBackgroundFrom": { "@id": "http://purl.org/spar/cito/obtainsBackgroundFrom", "@type": "@id", "@array": true },
    "citoobtainsSupportFrom": { "@id": "http://purl.org/spar/cito/obtainsSupportFrom", "@type": "@id", "@array": true },
    "citoparodies": { "@id": "http://purl.org/spar/cito/parodies", "@type": "@id", "@array": true },
    "citoplagiarizes": { "@id": "http://purl.org/spar/cito/plagiarizes", "@type": "@id", "@array": true },
    "citoqualifies": { "@id": "http://purl.org/spar/cito/qualifies", "@type": "@id", "@array": true },
    "citorefutes": { "@id": "http://purl.org/spar/cito/refutes", "@type": "@id", "@array": true },
    "citorepliesTo": { "@id": "http://purl.org/spar/cito/repliesTo", "@type": "@id", "@array": true },
    "citoretracts": { "@id": "http://purl.org/spar/cito/retracts", "@type": "@id", "@array": true },
    "citoreviews": { "@id": "http://purl.org/spar/cito/reviews", "@type": "@id", "@array": true },
    "citoridicules": { "@id": "http://purl.org/spar/cito/ridicules", "@type": "@id", "@array": true },
    "citospeculatesOn": { "@id": "http://purl.org/spar/cito/speculatesOn", "@type": "@id", "@array": true },
    "citosupports": { "@id": "http://purl.org/spar/cito/supports", "@type": "@id", "@array": true },
    "citoupdates": { "@id": "http://purl.org/spar/cito/updates", "@type": "@id", "@array": true },
    "citousesConclusionsFrom": { "@id": "http://purl.org/spar/cito/usesConclusionsFrom", "@type": "@id", "@array": true },
    "citousesDataFrom": { "@id": "http://purl.org/spar/cito/usesDataFrom", "@type": "@id", "@array": true },
    "citousesMethodIn": { "@id": "http://purl.org/spar/cito/usesMethodIn", "@type": "@id", "@array": true },

    "doapSpecification": { "@id": "http://usefulinc.com/ns/doap#Specification", "@type": "@id" },
    "specrequirement": { "@id": "http://www.w3.org/ns/spec#requirement", "@type": "@id", "@array": true },
    "specstatement": { "@id": "http://www.w3.org/ns/spec#statement" },
    "specrequirementSubject": { "@id": "http://www.w3.org/ns/spec#requirementSubject", "@type": "@id" },
    "specrequirementLevel": { "@id": "http://www.w3.org/ns/spec#requirementLevel", "@type": "@id" },
    "spectestSuite": { "@id": "http://www.w3.org/ns/spec#testSuite", "@type": "@id", "@array": true },
    "specimplementationReports": { "@id": "http://www.w3.org/ns/spec#implementationReports", "@type": "@id", "@array": true },
    "specrequirementReference": { "@id": "http://www.w3.org/ns/spec#requirementReference", "@type": "@id" },
    "testdescriptionTestCase": { "@id": "http://www.w3.org/2006/03/test-description#TestCase", "@type": "@id" },
    "testdescriptionreviewStatus": { "@id": "http://www.w3.org/2006/03/test-description#reviewStatus", "@type": "@id" },
    "specchangelog": { "@id": "http://www.w3.org/ns/spec#changelog", "@type": "@id", "@array": true },
    "specchange": { "@id": "http://www.w3.org/ns/spec#change", "@type": "@id", "@array": true },
    "specchangeSubject": { "@id": "http://www.w3.org/ns/spec#changeSubject", "@type": "@id" },
    "specchangeClass": { "@id": "http://www.w3.org/ns/spec#changeClass", "@type": "@id" }
  },
  ChangeClasses: {
    'http://www.w3.org/ns/spec#ChangeClass1': '1',
    'http://www.w3.org/ns/spec#ChangeClass2': '2',
    'http://www.w3.org/ns/spec#ChangeClass3': '3',
    'http://www.w3.org/ns/spec#ChangeClass4': '4',
    'http://www.w3.org/ns/spec#ChangeClass5': '5'
  },
  SecretAgentNames: ['Abraham Lincoln', 'Admiral Awesome', 'Anonymous Coward', 'Believe it or not', 'Creative Monkey', 'Senegoid', 'Dog from the Web', 'Ekrub', 'Elegant Banana', 'Foo Bar', 'Lbmit', 'Lunatic Scholar', 'NahuLcm', 'Noslen', 'Okie Dokie', 'Samurai Cat', 'Vegan Superstar'],

  RefAreas: {"AF":"Afghanistan","A9":"Africa","AL":"Albania","DZ":"Algeria","AS":"American Samoa","L5":"Andean Region","AD":"Andorra","AO":"Angola","AG":"Antigua and Barbuda","1A":"Arab World","AR":"Argentina","AM":"Armenia","AW":"Aruba","AU":"Australia","AT":"Austria","AZ":"Azerbaijan","BS":"Bahamas, The","BH":"Bahrain","BD":"Bangladesh","BB":"Barbados","BY":"Belarus","BE":"Belgium","BZ":"Belize","BJ":"Benin","BM":"Bermuda","BT":"Bhutan","BO":"Bolivia","BA":"Bosnia and Herzegovina","BW":"Botswana","BR":"Brazil","BN":"Brunei Darussalam","BG":"Bulgaria","BF":"Burkina Faso","BI":"Burundi","CV":"Cabo Verde","KH":"Cambodia","CM":"Cameroon","CA":"Canada","S3":"Caribbean small states","KY":"Cayman Islands","CF":"Central African Republic","TD":"Chad","JG":"Channel Islands","CL":"Chile","CN":"China","CO":"Colombia","KM":"Comoros","CD":"Congo, Dem. Rep.","CG":"Congo, Rep.","CR":"Costa Rica","CI":"Cote d'Ivoire","HR":"Croatia","CU":"Cuba","CW":"Curacao","CY":"Cyprus","CZ":"Czech Republic","DK":"Denmark","DJ":"Djibouti","DM":"Dominica","DO":"Dominican Republic","Z4":"East Asia & Pacific (all income levels)","4E":"East Asia & Pacific (developing only)","C4":"East Asia and the Pacific (IFC classification)","EC":"Ecuador","EG":"Egypt, Arab Rep.","SV":"El Salvador","GQ":"Equatorial Guinea","ER":"Eritrea","EE":"Estonia","ET":"Ethiopia","XC":"Euro area","Z7":"Europe & Central Asia (all income levels)","7E":"Europe & Central Asia (developing only)","C5":"Europe and Central Asia (IFC classification)","EU":"European Union","FO":"Faeroe Islands","FJ":"Fiji","FI":"Finland","FR":"France","PF":"French Polynesia","GA":"Gabon","GM":"Gambia, The","GE":"Georgia","DE":"Germany","GH":"Ghana","GR":"Greece","GL":"Greenland","GD":"Grenada","GU":"Guam","GT":"Guatemala","GN":"Guinea","GW":"Guinea-Bissau","GY":"Guyana","HT":"Haiti","XE":"Heavily indebted poor countries (HIPC)","XD":"High income","XS":"High income: OECD","XR":"High income: nonOECD","HN":"Honduras","HK":"Hong Kong SAR, China","HU":"Hungary","IS":"Iceland","IN":"India","ID":"Indonesia","IR":"Iran, Islamic Rep.","IQ":"Iraq","IE":"Ireland","IM":"Isle of Man","IL":"Israel","IT":"Italy","JM":"Jamaica","JP":"Japan","JO":"Jordan","KZ":"Kazakhstan","KE":"Kenya","KI":"Kiribati","KP":"Korea, Dem. Rep.","KR":"Korea, Rep.","KV":"Kosovo","KW":"Kuwait","KG":"Kyrgyz Republic","LA":"Lao PDR","ZJ":"Latin America & Caribbean (all income levels)","XJ":"Latin America & Caribbean (developing only)","L4":"Latin America and the Caribbean","C6":"Latin America and the Caribbean (IFC classification)","LV":"Latvia","XL":"Least developed countries: UN classification","LB":"Lebanon","LS":"Lesotho","LR":"Liberia","LY":"Libya","LI":"Liechtenstein","LT":"Lithuania","XO":"Low & middle income","XM":"Low income","XN":"Lower middle income","LU":"Luxembourg","MO":"Macao SAR, China","MK":"Macedonia, FYR","MG":"Madagascar","MW":"Malawi","MY":"Malaysia","MV":"Maldives","ML":"Mali","MT":"Malta","MH":"Marshall Islands","MR":"Mauritania","MU":"Mauritius","MX":"Mexico","L6":"Mexico and Central America","FM":"Micronesia, Fed. Sts.","ZQ":"Middle East & North Africa (all income levels)","XQ":"Middle East & North Africa (developing only)","C7":"Middle East and North Africa (IFC classification)","XP":"Middle income","MD":"Moldova","MC":"Monaco","MN":"Mongolia","ME":"Montenegro","MA":"Morocco","MZ":"Mozambique","MM":"Myanmar","NA":"Namibia","NP":"Nepal","NL":"Netherlands","NC":"New Caledonia","NZ":"New Zealand","NI":"Nicaragua","NE":"Niger","NG":"Nigeria","M2":"North Africa","XU":"North America","MP":"Northern Mariana Islands","NO":"Norway","XY":"Not classified","OE":"OECD members","OM":"Oman","S4":"Other small states","S2":"Pacific island small states","PK":"Pakistan","PW":"Palau","PA":"Panama","PG":"Papua New Guinea","PY":"Paraguay","PE":"Peru","PH":"Philippines","PL":"Poland","PT":"Portugal","PR":"Puerto Rico","QA":"Qatar","RO":"Romania","RU":"Russian Federation","RW":"Rwanda","WS":"Samoa","SM":"San Marino","ST":"Sao Tome and Principe","SA":"Saudi Arabia","SN":"Senegal","RS":"Serbia","SC":"Seychelles","SL":"Sierra Leone","SG":"Singapore","SX":"Sint Maarten (Dutch part)","SK":"Slovak Republic","SI":"Slovenia","S1":"Small states","SB":"Solomon Islands","SO":"Somalia","ZA":"South Africa","8S":"South Asia","C8":"South Asia (IFC classification)","SS":"South Sudan","L7":"Southern Cone Extended","ES":"Spain","LK":"Sri Lanka","KN":"St. Kitts and Nevis","LC":"St. Lucia","MF":"St. Martin (French part)","VC":"St. Vincent and the Grenadines","C9":"Sub-Saharan Africa (IFC classification)","ZG":"Sub-Saharan Africa (all income levels)","ZF":"Sub-Saharan Africa (developing only)","A4":"Sub-Saharan Africa excluding South Africa","A5":"Sub-Saharan Africa excluding South Africa and Nigeria","SD":"Sudan","SR":"Suriname","SZ":"Swaziland","SE":"Sweden","CH":"Switzerland","SY":"Syrian Arab Republic","TJ":"Tajikistan","TZ":"Tanzania","TH":"Thailand","TL":"Timor-Leste","TG":"Togo","TO":"Tonga","TT":"Trinidad and Tobago","TN":"Tunisia","TR":"Turkey","TM":"Turkmenistan","TC":"Turks and Caicos Islands","TV":"Tuvalu","UG":"Uganda","UA":"Ukraine","AE":"United Arab Emirates","GB":"United Kingdom","US":"United States","XT":"Upper middle income","UY":"Uruguay","UZ":"Uzbekistan","VU":"Vanuatu","VE":"Venezuela, RB","VN":"Vietnam","VI":"Virgin Islands (U.S.)","PS":"West Bank and Gaza","1W":"World","YE":"Yemen, Rep.","ZM":"Zambia","ZW":"Zimbabwe"},
    Languages: {"ab":"аҧсуа","aa":"Afaraf","af":"Afrikaans","ak":"Akan","sq":"Shqip","am":"አማርኛ","ar":"العربية","an":"Aragonés","hy":"Հայերեն","as":"অসমীয়া","av":"Aвар","ae":"Avesta","ay":"Aymar","az":"Azərbaycanca","bm":"Bamanankan","ba":"башҡорт","eu":"Euskara","be":"Беларуская","bn":"বাংলা","bh":"भोजपुरी","bi":"Bislama","bs":"Bosanski","br":"Brezhoneg","bg":"български","my":"ဗမာစာ","ca":"Català","ch":"Chamoru","ce":"нохчийн мотт","ny":"chiCheŵa","zh":"中文","cv":"чӑваш чӗлхи","kw":"Kernewek","co":"Corsu","cr":"ᓀᐦᐃᔭᐍᐏᐣ","hr":"Hrvatski","cs":"Čeština","da":"Dansk","dv":"ދިވެހި","nl":"Nederlands","en":"English","eo":"Esperanto","et":"Eesti","ee":"Eʋegbe","fo":"Føroyskt","fj":"Vosa Vakaviti","fi":"Suomi","fr":"Français","ff":"Fulfulde","gl":"Galego","ka":"ქართული","de":"Deutsch","el":"Ελληνικά","gn":"Avañeẽ","gu":"ગુજરાતી","ht":"Kreyòl ayisyen","ha":"Hausa, هَوُسَ","he":"עברית","hz":"Otjiherero","hi":"हिन्दी","ho":"Hiri Motu","hu":"Magyar","ia":"Interlingua","id":"Bahasa Indonesia","ie":"Interlingue","ga":"Gaeilge","ig":"Asụsụ Igbo","ik":"Iñupiaq","io":"Ido","is":"Íslenska","it":"Italiano","iu":"ᐃᓄᒃᑎᑐᑦ","ja":"日本語","jv":"Basa Jawa","kl":"Kalaallisut","kn":"ಕನ್ನಡ","kr":"Kanuri","ks":"कश्मीरी","kk":"Қазақ тілі","km":"ភាសាខ្មែរ","ki":"Gĩkũyũ","rw":"Ikinyarwanda","ky":"кыргыз","kv":"коми кыв","kg":"KiKongo","ko":"한국어","ku":"Kurdî","kj":"Kuanyama","la":"Latina","lb":"Lëtzebuergesch","lg":"Luganda","li":"Limburgs","ln":"Lingála","lo":"ພາສາລາວ","lt":"Lietuvių","lu":"Luba-Katanga","lv":"Latviešu","gv":"Gaelg","mk":"македонски","mg":"Malagasy","ms":"Bahasa Melayu","ml":"മലയാളം","mt":"Malti","mi":"te reo Māori","mr":"मराठी","mh":"Kajin M̧ajeļ","mn":"монгол","na":"Naoero","nv":"Diné bizaad","nb":"Norsk bokmål","nd":"isiNdebele","ne":"नेपाली","ng":"Owambo","nn":"Nynorsk","no":"Norsk","ii":"Sichuan Yi","nr":"isiNdebele","oc":"Occitan","oj":"ᐊᓂᔑᓈᐯᒧᐎᓐ","cu":"Словѣньскъ","om":"Afaan Oromoo","or":"ଓଡ଼ିଆ","os":"ирон æвзаг","pa":"ਪੰਜਾਬੀ","pi":"पाऴि","fa":"فارسی","pl":"Polski","ps":"پښتو","pt":"Português","qu":"Runa Simi","rm":"Rumantsch","rn":"kiRundi","ro":"Română","ru":"русский язык","sa":"संस्कृतम्","sc":"sardu","sd":"सिन्धी","se":"Davvisámegiella","sm":"Gagana Samoa","sg":"Sängö","sr":"српски","gd":"Gàidhlig","sn":"chiShona","si":"සිංහල","sk":"slovenčina","sl":"slovenščina","so":"Soomaaliga","st":"Sesotho","es":"Español","su":"Basa Sunda","sw":"Kiswahili","ss":"SiSwati","sv":"Svenska","ta":"தமிழ்","te":"తెలుగు","tg":"тоҷикӣ","th":"ไทย","ti":"ትግርኛ","bo":"བོད་ཡིག","tk":"Türkmen","tl":"Tagalog","tn":"Setswana","to":"faka Tonga","tr":"Türkçe","ts":"Xitsonga","tt":"татарча","tw":"Twi","ty":"Reo Tahiti","ug":"ئۇيغۇرچە‎","uk":"українська","ur":"اردو","uz":"O‘zbek","ve":"Tshivenḓa","vi":"Tiếng Việt","vo":"Volapük","wa":"Walon","cy":"Cymraeg","wo":"Wollof","fy":"Frysk","xh":"IsiXhosa","yi":"ייִדיש","yo":"Yorùbá","za":"Saɯ cueŋƅ"}
}
export const DocumentURL = '';
export const Resource = {};
export const Inbox = {};
export const Notification = {};
export const Subscription = {};
export const Activity = {};
export const Lang = document.documentElement.lang;
export const DocRefType = '';
export const RefType = {
  LNCS: { InlineOpen: '[', InlineClose: ']' },
  ACM: { InlineOpen: '[', InlineClose: ']' }
};
export const VerifyCitation = true;
export const Stylesheets = [];
export const User = {
  IRI: null,
  Role: null,
  UI: {},
  OIDC: false,
  WebIdDelegate: null
};
export const ContributorRoles = ['author', 'editor'];
export const OidcPopupUrl = 'https://dokie.li/popup.html';
export const LocalDocument = (document.location.protocol == 'file:');
export const UseLocalStorage = false;
export const AutoSave = {
  Methods: ['localStorage', 'http'],
  Timer: 60000,
  Items: {}
};
export const ActionMessage = {
  Timer: 1500
};
export const AvatarSize = 48;
export const DisableLocalStorageButtons = '<button class="local-storage-disable-html" title="Disable local storage (temporary) in the browser">' + Icon[".fas.fa-database.fa-2x"] + 'Local Storage</button>';
export const EnableLocalStorageButtons = '<button class="local-storage-enable-html" title="Enable local storage (temporary) in the browser">' + Icon[".fas.fa-database.fa-2x"] + 'Local Storage</button>';
export const CDATAStart = '//<![CDATA[';
export const CDATAEnd = '//]]>';
export const SortableList = false;
export const GraphViewerAvailable = true;
export const MathAvailable = (typeof MathJax !== 'undefined');
export const EditorAvailable = true;
export const EditorEnabled = false;
export const ContentEditable = false;
export const WebExtension = ((window.chrome && chrome.runtime && chrome.runtime.id) || (typeof browser !== 'undefined' && browser.runtime && browser.runtime.id));
export const Editor = {
  headings: ["h1", "h2", "h3", "h4", "h5", "h6"],
  regexEmptyHTMLTags: /<[^\/>][^>]*><\/[^>]+>/gim,
  ButtonLabelType: 'fontawesome',
  DisableEditorButton: '<button class="editor-disable" title="Disable editor">' + Icon[".fas.fa-i-cursor.fa-2x"] + 'Edit</button>',
  EnableEditorButton: '<button class="editor-enable" title="Enable editor">' + Icon[".fas.fa-i-cursor.fa-2x"] + 'Edit</button>'
};
export const Button = {
  Close: '<button class="close" title="Close">' + Icon[".fas.fa-times.fa-2x"] + '</button>',
  Delete: '<button class="delete" title="Delete">' + Icon[".fas.fa-trash-alt"] + '</button>'
};
export const DOMNormalisation = {
  'voidElements': ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr'],
  'selfClosing': ['circle', 'ellipse', 'line', 'path', 'polygon', 'polyline', 'rect', 'stop', 'use'],
  'skipAttributes': ['aria-multiline', 'contenteditable', 'data-medium-editor-editor-index', 'data-medium-editor-element', 'data-medium-focused', 'data-placeholder', 'medium-editor-index', 'role', 'spellcheck', 'style'],
  'sortAttributes': true,
  'skipNodeWithClass': 'do',
  'skipNodeWithId': ['toc-nav'],
  'classWithChildText': {
    'class': '.do.ref',
    'element': 'mark'
  },
  'replaceClassItemWith': {
    'source': ['medium-editor-element', 'medium-editor-placeholder', 'on-document-menu'],
    'target': ''
  },
  'skipClassWithValue': '',
  'skipEscapingDataBlockTypes': ['text/turtle', 'application/ld+json', 'application/activity+json', 'application/n-triples', 'application/trig', 'text/n3']
};
export const ArticleNodeSelectors = [
  'main > article',
  'main',
  'body'
];
export const SelectorSign = {
  "*": "🔗",
  "aside": "|",
  "audio": "🔊",
  "code": "#",
  "dl": "☝",
  "dl#document-annotation-service": "※",
  "dl#document-cited-by": "※",
  "dl#document-created": "📅",
  "dl#document-in-reply-to": "⮪",
  "dl#document-identifier": "🚩",
  "dl#document-inbox": "📥",
  "dl#document-latest-version": "∼",
  "dl#document-language": "🗺",
  "dl#document-license": "🌻",
  "dl#document-memento": "⛰",
  "dl#document-modified": "📅",
  "dl#document-original": "♁",
  "dl#document-predecessor-version": "≺",
  "dl#document-published": "📅",
  "dl#document-rights": "📜",
  "dl#document-resource-state": "🙊",
  "dl#document-see-also": "🙈",
  "dl#document-status": "🎆",
  "dl#document-timemap": "⌚",
  "dl#document-type": "🌱",
  "dfn": "📇",
  "figure": "❦",
  "footer": "⸙",
  "img": "🖼",
  "nav": "☛",
  "p": "¶",
  "pre": "🖩",
  "section": "§",
  "section#acknowledgements": "☺",
  "section#conclusions": "∴",
  "section#keywords": "🏷",
  "section#references": "※",
  "section#related-work": "⌘",
  "section#results": "∞",
  "table": "𝄜",
  "video": "🎞"
};
export const MotivationSign = {
  "oa:assessing": "✪",
  "oa:bookmarking": "🔖",
  "oa:commenting": "🗨",
  "oa:describing": "※",
  "oa:highlighting": "#",
  "oa:linking": "※",
  "oa:questioning": "?",
  "oa:replying": "💬"
};
export const DocumentDoItems = [
  'document-items',
  'embed-data-entry',
  'create-new-document',
  'open-document',
  'source-view',
  'save-as-document',
  'user-identity-input',
  'resource-browser',
  'share-resource',
  'reply-to-resource',
  'memento-document',
  'graph-view',
  'robustify-links'
];
export const DocumentItems = [
  'authors',
  'document-identifier',
  'document-created',
  'document-modified',
  'document-published',
  'document-repository',
  'document-test-suite',
  'document-original',
  'document-memento',
  'document-latest-version',
  'document-latest-published-version',
  'document-predecessor-version',
  'document-timegate',
  'document-timemap',
  'document-derived-from',
  'document-derived-on',
  'document-editors',
  'document-authors',
  'document-language',
  'document-license',
  'document-inbox',
  'document-annotation-service',
  'document-in-reply-to',
  'document-rights',
  'document-type',
  'document-resource-state',
  'document-status',
  'document-see-also',
  'document-cited-by',
  'document-policy',
  'table-of-contents',
  'list-of-figures',
  'list-of-tables',
  'list-of-abbreviations',
  'list-of-concepts',
  'list-of-quotations',
  'table-of-requirements',
  'abstract',
  'categories-and-subject-descriptors',
  'keywords',
  'general-terms',
  'list-of-additional-concepts',

  'introduction'
];
export const ListOfStuff = {
  'table-of-contents': { 'label': 'Contents', 'selector': 'content', 'titleSelector': 'h1' },
  'list-of-figures': { 'label': 'Figures', 'selector': 'figure', 'titleSelector': 'figcaption' },
  'list-of-tables': { 'label': 'Tables', 'selector': 'table', 'titleSelector': 'caption' },
  'list-of-abbreviations': { 'label': 'Abbreviations', 'selector': 'abbr', 'titleSelector': 'title' },
  'list-of-quotations': { 'label': 'Quotations', 'selector': 'q', 'titleSelector': 'cite' },
  'list-of-concepts': { 'label': 'Concepts', 'selector': '[typeof~="skos:Concept"]', 'titleSelector': '[property~="skos:prefLabel"]' },
  'table-of-requirements': { 'label': 'Requirements', 'selector': '[rel~="spec:requirement"]', 'titleSelector': '[property~="spec:statement"]' },
  'references': { 'label': 'References', 'selector': 'cite a', 'titleSelector': 'h2' }
};
export const CollectionItemsLimit = 20;
export const ContextLength = 32;
export const ProxyURL = ((window.location.hostname == 'localhost' || !navigator.onLine) ? window.location.protocol + '//' + window.location.host + '/proxy?uri=' : 'https://dokie.li/proxy?uri=');
export const AuthEndpoint = ((window.location.hostname == 'localhost' || !navigator.onLine) ? window.location.protocol + '//' + window.location.host + '/' : 'https://dokie.li/');
export const NotificationLicense = 'https://creativecommons.org/publicdomain/zero/1.0/';
export const License = {
  "https://creativecommons.org/publicdomain/zero/1.0/": { 'name': 'CC0 1.0', 'description': 'Creative Commons CC0 1.0 Universal' },
  "https://creativecommons.org/licenses/by/4.0/": { 'name': 'CC BY 4.0', 'description': 'Creative Commons Attribution 4.0 International' },
  "https://creativecommons.org/licenses/by-sa/4.0/": { 'name': 'CC BY-SA 4.0', 'description': 'Creative Commons Attribution-ShareAlike 4.0 International' },
  "https://creativecommons.org/licenses/by-nc/4.0/": { 'name': 'CC BY-NC 4.0', 'description': 'Creative Commons Attribution-NonCommercial 4.0 International' },
  "https://creativecommons.org/licenses/by-nd/4.0/": { 'name': 'CC BY-ND 4.0', 'description': 'Creative Commons Attribution-NoDerivatives 4.0 International' },
  "https://creativecommons.org/licenses/by-nc-sa/4.0/": { 'name': 'CC BY-NC-SA 4.0', 'description': 'Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International' },
  "https://creativecommons.org/licenses/by-nc-nd/4.0/": { 'name': 'CC BY-NC-ND 4.0', 'description': 'Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International' }
};
export const ResourceType = {
  "http://schema.org/Article": { 'name': 'Article', 'description': 'An article, such as a news article or piece of investigative report.' },
  "http://schema.org/BlogPosting": { 'name': 'BlogPosting', 'description': 'A blog post.' },
  "http://schema.org/Guide": { 'name': 'Guide', 'description': 'Guide is a page or article that recommends specific products or services, or aspects of a thing for a user to consider.' },
  "http://schema.org/NewsArticle": { 'name': 'NewsArticle', 'description': 'A NewsArticle is an article whose content reports news, or provides background context and supporting materials for understanding the news.' },
  "http://schema.org/Recipe": { 'name': 'Recipe', 'description': 'A recipe.' },
  "http://schema.org/Review": { 'name': 'Review', 'description': 'A review of an item - for example, of a restaurant, movie, or store.' },
  "http://schema.org/ScholarlyArticle": { 'name': 'ScholarlyArticle', 'description': 'A scholarly article.' },
  "http://purl.org/ontology/bibo/Slideshow": { 'name': 'Slideshow', 'description': 'A presentation of a series of slides, usually presented in front of an audience with written text and images.' },
  "http://usefulinc.com/ns/doap#Specification": { 'name': 'Specification', 'description': 'A specification of a system\'s aspects, technical or otherwise.' },
  "http://schema.org/TechArticle": { 'name': 'TechArticle', 'description': 'A technical article - Example: How-to (task) topics, step-by-step, procedural troubleshooting, specifications, etc.' },
  "http://schema.org/Thesis": { 'name': 'Thesis', 'description': 'A thesis or dissertation document submitted in support of candidature for an academic degree or professional qualification.' },
  "http://schema.org/Trip": { 'name': 'Trip', 'description': 'A trip or journey. An itinerary of visits to one or more places.' }
};
export const PublicationStatus = {
  "http://purl.org/spar/pso/draft": { 'name': 'Draft', 'description': 'The status of a work (for example a document or a dataset) prior to completion and publication.' },
  "http://purl.org/spar/pso/published": { 'name': 'Published', 'description': 'The status of material (for example a document or a dataset) that has been published, i.e. made available for people to access, read or use, either freely or for a purchase price or an access fee.' }
};
export const Citation = {
  'http://purl.org/spar/cito/agreesWith': 'agrees with',
  'http://purl.org/spar/cito/cites': 'cites',
  'http://purl.org/spar/cito/citesAsAuthority': 'cites as authority',
  'http://purl.org/spar/cito/citesAsDataSource': 'cites as data source',
  'http://purl.org/spar/cito/citesAsEvidence': 'cites as evidence',
  'http://purl.org/spar/cito/citesAsMetadataDocument': 'cites as metadata document',
  'http://purl.org/spar/cito/citesAsPotentialSolution': 'cites as potential solution',
  'http://purl.org/spar/cito/citesAsRecommendedReading': 'cites as potential reading',
  'http://purl.org/spar/cito/citesAsRelated': 'cites as related',
  'http://purl.org/spar/cito/citesAsSourceDocument': 'cites as source document',
  'http://purl.org/spar/cito/citesForInformation': 'cites for information',
  'http://purl.org/spar/cito/compiles': 'compiles',
  'http://purl.org/spar/cito/confirms': 'confirms',
  'http://purl.org/spar/cito/containsAssertionFrom': 'contains assertion from',
  'http://purl.org/spar/cito/corrects': 'corrects',
  'http://purl.org/spar/cito/credits': 'credits',
  'http://purl.org/spar/cito/critiques': 'critiques',
  'http://purl.org/spar/cito/derides': 'derides',
  'http://purl.org/spar/cito/describes': 'describes',
  'http://purl.org/spar/cito/disagreesWith': 'disagrees with',
  'http://purl.org/spar/cito/discusses': 'discusses',
  'http://purl.org/spar/cito/disputes': 'disputes',
  'http://purl.org/spar/cito/documents': 'documents',
  'http://purl.org/spar/cito/extends': 'extends',
  'http://purl.org/spar/cito/includesExcerptFrom': 'includes excerpt from',
  'http://purl.org/spar/cito/includesQuotationFrom': 'includes quotation from',
  'http://purl.org/spar/cito/linksTo': 'links to',
  'http://purl.org/spar/cito/obtainsBackgroundFrom': 'obtains background from',
  'http://purl.org/spar/cito/obtainsSupportFrom': 'obtains support from',
  'http://purl.org/spar/cito/parodies': 'parodies',
  'http://purl.org/spar/cito/plagiarizes': 'plagiarizes',
  'http://purl.org/spar/cito/qualifies': 'qualifies',
  'http://purl.org/spar/cito/refutes': 'refutes',
  'http://purl.org/spar/cito/repliesTo': 'replies to',
  'http://purl.org/spar/cito/retracts': 'retracts',
  'http://purl.org/spar/cito/reviews': 'reviews',
  'http://purl.org/spar/cito/ridicules': 'ridicules',
  'http://purl.org/spar/cito/speculatesOn': 'speculates on',
  'http://purl.org/spar/cito/supports': 'supports',
  'http://purl.org/spar/cito/updates': 'updates',
  'http://purl.org/spar/cito/usesConclusionsFrom': 'uses conclusions from',
  'http://purl.org/spar/cito/usesDataFrom': 'uses data from',
  'http://purl.org/spar/cito/usesMethodIn': 'uses method in'
};
export const SKOSClasses = {
  'http://www.w3.org/2004/02/skos/core#ConceptScheme': 'Concept Scheme',
  'http://www.w3.org/2004/02/skos/core#Collection': 'Collection',
  'http://www.w3.org/2004/02/skos/core#OrderedCollection': 'Ordered Collection',
  'http://www.w3.org/2004/02/skos/core#Concept': 'Concept'
};
export const TestDescriptionReviewStatus = {
  'http://www.w3.org/2006/03/test-description#accepted': "the item has gone through a first review, which shows it as valid for further processing",
  'http://www.w3.org/2006/03/test-description#approved': "the item has gone through the review process and was approved",
  'http://www.w3.org/2006/03/test-description#assigned': "a more specific review of the item has been assigned to someone",
  'http://www.w3.org/2006/03/test-description#onhold': "the item had already gone through the review process, but the results of the review need to be re-assessed due to new input",
  'http://www.w3.org/2006/03/test-description#rejected': "the item has gone through the review process and was rejected",
  'http://www.w3.org/2006/03/test-description#unreviewed': "the item has been proposed, but hasn't been reviewed (e.g. for completeness) yet"
};
export const Actor = {
  Type: {
    "http://purl.org/dc/terms/Agent": "Agent",
    "http://schema.org/Person": "Person",
    "http://www.w3.org/2006/vcard/ns#Group": "Group",
    "http://www.w3.org/2006/vcard/ns#Individual": "Individual",
    "http://www.w3.org/2006/vcard/ns#Organization": "Organization",
    "http://www.w3.org/2006/vcard/ns#VCard": "VCard",
    "http://xmlns.com/foaf/0.1/Agent": "Agent",
    "http://xmlns.com/foaf/0.1/Group": "Group",
    "http://xmlns.com/foaf/0.1/Organization": "Organization",
    "http://xmlns.com/foaf/0.1/Person": "Person",
    "https://www.w3.org/ns/activitystreams#Application": "Application",
    "https://www.w3.org/ns/activitystreams#Group": "Group",
    "https://www.w3.org/ns/activitystreams#Organization": "Organization",
    "https://www.w3.org/ns/activitystreams#Person": "Person",
    "https://www.w3.org/ns/activitystreams#Service": "Service"
  },

  Property: {
    "http://purl.org/dc/terms/creator": "creator",
    "http://schema.org/author": "author",
    "http://schema.org/contributor": "contributor",
    "http://schema.org/creator": "creator",
    "http://schema.org/editor": "editor",
    "http://xmlns.com/foaf/0.1/knows": "knows",
    "https://www.w3.org/ns/activitystreams#actor": "actor"
  }
};
export const MediaTypes = {
  RDF: ['text/turtle', 'application/ld+json', 'application/activity+json', 'text/html', 'image/svg+xml', 'text/markdown'],

  Binary: ['image/png', 'image/jpeg', 'image/gif', 'image/x-icon'],

  Feed: ['application/atom+xml', 'application/rss+xml'],

  Markup: ['text/html', 'image/svg+xml', 'text/markdown'],

  MultiMediaType: ['audio', 'image', 'video']
};
export const Prefixes = {
  'xsd': 'http://www.w3.org/2001/XMLSchema#',
  'rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
  'as': 'https://www.w3.org/ns/activitystreams#',
  'oa': 'http://www.w3.org/ns/oa#',
  'schema': 'http://schema.org/',
  'cito': 'http://purl.org/spar/cito/'
};
export const Vocab = {
  "rdftype": { "@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type", "@type": "@id", "@array": true },
  "rdffirst": { "@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#first", "@type": "@id" },
  "rdfrest": { "@id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#rest", "@type": "@id" },
  "rdfvalue": "http://www.w3.org/1999/02/22-rdf-syntax-ns#value",
  "rdfslabel": "http://www.w3.org/2000/01/rdf-schema#label",
  "rdfsseeAlso": { "@id": "http://www.w3.org/2000/01/rdf-schema#seeAlso", "@type": "@id", "@array": true },

  "owlsameAs": { "@id": "http://www.w3.org/2002/07/owl#sameAs", "@type": "@id", "@array": true },

  "foafAgent": { "@id": "http://xmlns.com/foaf/0.1/Agent", "@type": "@id" },
  "foafPerson": { "@id": "http://xmlns.com/foaf/0.1/Person", "@type": "@id" },
  "foafGroup": { "@id": "http://xmlns.com/foaf/0.1/Group", "@type": "@id" },
  "foafOrganization": { "@id": "http://xmlns.com/foaf/0.1/Organization", "@type": "@id" },
  "foafname": "http://xmlns.com/foaf/0.1/name",
  "foaffamilyName": "http://xmlns.com/foaf/0.1/familyName",
  "foafgivenName": "http://xmlns.com/foaf/0.1/givenName",
  "foafhomepage": { "@id": "http://xmlns.com/foaf/0.1/homepage", "@type": "@id" },
  "foafweblog": { "@id": "http://xmlns.com/foaf/0.1/weblog", "@type": "@id" },
  "foafimg": { "@id": "http://xmlns.com/foaf/0.1/img", "@type": "@id" },
  "foafdepiction": { "@id": "http://xmlns.com/foaf/0.1/depiction", "@type": "@id" },
  "foafnick": "http://xmlns.com/foaf/0.1/nick",
  "foafmaker": { "@id": "http://xmlns.com/foaf/0.1/maker", "@type": "@id" },
  "foafknows": { "@id": "http://xmlns.com/foaf/0.1/knows", "@type": "@id", "@array": true },
  "foafprimaryTopic": { "@id": "http://xmlns.com/foaf/0.1/primaryTopic", "@type": "@id" },
  "foafmbox": "http://xmlns.com/foaf/0.1/mbox",

  "vcardVCard": { "@id": "http://www.w3.org/2006/vcard/ns#VCard", "@type": "@id" },
  "vcardIndividual": { "@id": "http://www.w3.org/2006/vcard/ns#Individual", "@type": "@id" },
  "vcardGroup": { "@id": "http://www.w3.org/2006/vcard/ns#Group", "@type": "@id" },
  "vcardOrganization": { "@id": "http://www.w3.org/2006/vcard/ns#Organization", "@type": "@id" },
  "vcardfn": "http://www.w3.org/2006/vcard/ns#fn",
  "vcardfamilyname": "http://www.w3.org/2006/vcard/ns#family-name",
  "vcardgivenname": "http://www.w3.org/2006/vcard/ns#given-name",
  "vcardnickname": "http://www.w3.org/2006/vcard/ns#nickname",
  "vcardurl": { "@id": "http://www.w3.org/2006/vcard/ns#url", "@type": "@id" },
  "vcardphoto": { "@id": "http://www.w3.org/2006/vcard/ns#photo", "@type": "@id" },
  "vcardhasPhoto": { "@id": "http://www.w3.org/2006/vcard/ns#hasPhoto", "@type": "@id" },

  "schemaPerson": { "@id": "http://schema.org/Person", "@type": "@id" },
  "schemaOrganization": { "@id": "http://schema.org/Person", "@type": "@id" },
  "schemaDataset": { "@id": "http://schema.org/Dataset", "@type": "@id" },
  "schemaname": "http://schema.org/name",
  "schemafamilyName": "http://schema.org/familyName",
  "schemagivenName": "http://schema.org/givenName",
  "schemaurl": { "@id": "http://schema.org/url", "@type": "@id" },
  "schemaimage": { "@id": "http://schema.org/image", "@type": "@id" },
  "schemacreator": { "@id": "http://schema.org/creator", "@type": "@id", "@array": true },
  "schemaauthor": { "@id": "http://schema.org/author", "@type": "@id", "@array": true },
  "schemacontributor": { "@id": "http://schema.org/contributor", "@type": "@id", "@array": true },
  "schemaeditor": { "@id": "http://schema.org/editor", "@type": "@id", "@array": true },
  "schemaemail": "http://schema.org/email",
  "schemainLanguage": "http://schema.org/inLanguage",
  "schemalicense": { "@id": "http://schema.org/license", "@type": "@id" },
  "schemacitation": { "@id": "http://schema.org/citation", "@type": "@id", "@array": true },
  "schemaknows": { "@id": "http://schema.org/knows", "@type": "@id", "@array": true },
  "schemadateCreated": "http://schema.org/dateCreated",
  "schemadateModified": "http://schema.org/dateModified",
  "schemadatePublished": "http://schema.org/datePublished",
  "schemaabstract": "http://schema.org/abstract",
  "schemadescription": "http://schema.org/description",
  "schemahasPart": { "@id": "http://schema.org/hasPart", "@type": "@id", "@array": true },
  "schemaisPartOf": { "@id": "http://schema.org/isPartOf", "@type": "@id", "@array": true },
  "schemaArticle": { "@id": "http://schema.org/Article", "@type": "@id" },
  "schemaScholarlyArticle": { "@id": "http://schema.org/ScholarlyArticle", "@type": "@id" },
  "schemapotentialAction": { "@id": "http://schema.org/potentialAction", "@type": "@id", "@array": true },
  "schemaViewAction": { "@id": "http://schema.org/ViewAction" },
  "schematarget": { "@id": "http://schema.org/target" },
  "schemaobject": { "@id": "http://schema.org/object" },

  "dcelementstitle": "http://purl.org/dc/elements/1.1/title",
  "dcelementsdescription": "http://purl.org/dc/elements/1.1/description",

  "dctermsAgent": { "@id": "http://purl.org/dc/terms/Agent", "@type": "@id" },
  "dctermstitle": "http://purl.org/dc/terms/title",
  "dctermsdescription": "http://purl.org/dc/terms/description",
  "dctermscreator": { "@id": "http://purl.org/dc/terms/creator", "@type": "@id", "@array": true },
  "dctermsdate": "http://purl.org/dc/terms/date",
  "dctermsissued": "http://purl.org/dc/terms/issued",
  "dctermscreated": "http://purl.org/dc/terms/created",
  "dctermslanguage": "http://purl.org/dc/terms/language",
  "dctermslicense": { "@id": "http://purl.org/dc/terms/license", "@type": "@id" },
  "dctermsrights": { "@id": "http://purl.org/dc/terms/rights", "@type": "@id" },
  "dctermsconformsTo": { "@id": "http://purl.org/dc/terms/conformsTo", "@type": "@id" },
  "dctermshasPart": { "@id": "http://purl.org/dc/terms/hasPart", "@type": "@id", "@array": true },
  "dctermsisPartOf": { "@id": "http://purl.org/dc/terms/isPartOf", "@type": "@id", "@array": true },
  "dctermsreferences": { "@id": "http://purl.org/dc/terms/references", "@type": "@id", "@array": true },

  "cclicense": { "@id": "http://creativecommons.org/ns#license", "@type": "@id" },
  "xhvlicense": { "@id": "http://www.w3.org/1999/xhtml/vocab#license", "@type": "@id" },

  "skosConceptScheme": { "@id": "http://www.w3.org/2004/02/skos/core#ConceptScheme", "@type": "@id" },
  "skosCollection": { "@id": "http://www.w3.org/2004/02/skos/core#Collection", "@type": "@id" },
  "skosOrderedCollection": { "@id": "http://www.w3.org/2004/02/skos/core#OrderedCollection", "@type": "@id" },
  "skosConcept": { "@id": "http://www.w3.org/2004/02/skos/core#Concept", "@type": "@id" },
  "skosdefinition": { "@id": "http://www.w3.org/2004/02/skos/core#definition", "@type": "@id", "@array": true },
  "skosaltLabel": { "@id": "http://www.w3.org/2004/02/skos/core#altLabel", "@type": "@id", "@array": true },
  "skosprefLabel": { "@id": "http://www.w3.org/2004/02/skos/core#prefLabel", "@type": "@id", "@array": true },
  "skosmember": { "@id": "http://www.w3.org/2004/02/skos/core#member", "@type": "@id", "@array": true },
  "skosnotation": { "@id": "http://www.w3.org/2004/02/skos/core#notation", "@type": "@id", "@array": true },
  "skosnote": { "@id": "http://www.w3.org/2004/02/skos/core#note", "@type": "@id", "@array": true },
  "skoshasTopConcept": { "@id": "http://www.w3.org/2004/02/skos/core#hasTopConcept", "@type": "@id", "@array": true },
  "skostopConceptOf": { "@id": "http://www.w3.org/2004/02/skos/core#topConceptOf", "@type": "@id", "@array": true },
  "skosbroadMatch": { "@id": "http://www.w3.org/2004/02/skos/core#broadMatch", "@type": "@id", "@array": true },
  "skoscloseMatch": { "@id": "http://www.w3.org/2004/02/skos/core#closeMatch", "@type": "@id", "@array": true },
  "skosexactMatch": { "@id": "http://www.w3.org/2004/02/skos/core#exactMatch", "@type": "@id", "@array": true },
  "skosnarrowMatch": { "@id": "http://www.w3.org/2004/02/skos/core#narrowMatch", "@type": "@id", "@array": true },
  "skosrelatedMatch": { "@id": "http://www.w3.org/2004/02/skos/core#relatedMatch", "@type": "@id", "@array": true },

  "provgeneratedAtTime": "http://www.w3.org/ns/prov#generatedAtTime",
  "provwasRevisionOf": { "@id": "http://www.w3.org/ns/prov#wasRevisionOf", "@type": "@id" },

  "refPeriod": "http://purl.org/linked-data/sdmx/2009/dimension#refPeriod",
  "obsValue": "http://purl.org/linked-data/sdmx/2009/measure#obsValue",

  "biboeditor": { "@id": "http://purl.org/ontology/bibo/editor", "@type": "@id", "@array": true },
  "biboauthorList": { "@id": "http://purl.org/ontology/bibo/authorList", "@type": "@id" },
  "bibocontributorList": { "@id": "http://purl.org/ontology/bibo/contributorList", "@type": "@id" },
  "biboeditorList": { "@id": "http://purl.org/ontology/bibo/editorList", "@type": "@id" },

  "pimstorage": { "@id": "http://www.w3.org/ns/pim/space#storage", "@type": "@id", "@array": true },
  "pimpreferencesFile": { "@id": "http://www.w3.org/ns/pim/space#preferencesFile", "@type": "@id" },

  "pimpersistencePolicy": { "@id": "http://www.w3.org/2000/10/swap/pim/doc#persistencePolicy", "@type": "@id", "@array": true },

  "aclAuthorization": { "@id": "http://www.w3.org/ns/auth/acl#Authorization", "@type": "@id" },
  "aclRead": { "@id": "http://www.w3.org/ns/auth/acl#Read", "@type": "@id" },
  "aclWrite": { "@id": "http://www.w3.org/ns/auth/acl#Write", "@type": "@id" },
  "aclAppend": { "@id": "http://www.w3.org/ns/auth/acl#Append", "@type": "@id" },
  "aclControl": { "@id": "http://www.w3.org/ns/auth/acl#Control", "@type": "@id" },
  "aclaccessTo": { "@id": "http://www.w3.org/ns/auth/acl#accessTo", "@type": "@id", "@array": true },
  "acldefault": { "@id": "http://www.w3.org/ns/auth/acl#default", "@type": "@id", "@array": true },
  "aclagent": { "@id": "http://www.w3.org/ns/auth/acl#agent", "@type": "@id", "@array": true },
  "aclmode": { "@id": "http://www.w3.org/ns/auth/acl#mode", "@type": "@id", "@array": true },
  "acldelegates": { "@id": "http://www.w3.org/ns/auth/acl#delegates", "@type": "@id", "@array": true },

  "solidpreferredProxy": "http://www.w3.org/ns/solid/terms#preferredProxy",
  "solidpreferredPolicy": { "@id": "http://www.w3.org/ns/solid/terms#preferredPolicy", "@type": "@id" },
  "solidforClass": { "@id": "http://www.w3.org/ns/solid/terms#forClass", "@type": "@id" },
  "solidinstanceContainer": { "@id": "http://www.w3.org/ns/solid/terms#instanceContainer", "@type": "@id" },
  "solidpublicTypeIndex": { "@id": "http://www.w3.org/ns/solid/terms#publicTypeIndex", "@type": "@id" },
  "solidprivateTypeIndex": { "@id": "http://www.w3.org/ns/solid/terms#privateTypeIndex", "@type": "@id" },
  "solidowner": { "@id": "http://www.w3.org/ns/solid/terms#owner", "@type": "@id", "@array": true },
  "solidstorageDescription": { "@id": "http://www.w3.org/ns/solid/terms#storageDescription", "@type": "@id", "@array": true },

  "oaAnnotation": { "@id": "http://www.w3.org/ns/oa#Annotation", "@type": "@id" },
  "oahasBody": { "@id": "http://www.w3.org/ns/oa#hasBody", "@type": "@id" },
  "oahasTarget": { "@id": "http://www.w3.org/ns/oa#hasTarget", "@type": "@id" },
  "oahasSource": { "@id": "http://www.w3.org/ns/oa#hasSource", "@type": "@id" },
  "oahasSelector": { "@id": "http://www.w3.org/ns/oa#hasSelector", "@type": "@id" },
  "oarefinedBy": { "@id": "http://www.w3.org/ns/oa#refinedBy", "@type": "@id" },
  "oaexact": "http://www.w3.org/ns/oa#exact",
  "oaprefix": "http://www.w3.org/ns/oa#prefix",
  "oasuffix": "http://www.w3.org/ns/oa#suffix",
  "oamotivatedBy": { "@id": "http://www.w3.org/ns/oa#motivatedBy", "@type": "@id" },
  "oaannotationService": { "@id": "http://www.w3.org/ns/oa#annotationService", "@type": "@id", "@array": true },

  "asApplication": { "@id": "https://www.w3.org/ns/activitystreams#Application", "@type": "@id" },
  "asGroup": { "@id": "https://www.w3.org/ns/activitystreams#Group", "@type": "@id" },
  "asOrganization": { "@id": "https://www.w3.org/ns/activitystreams#Organization", "@type": "@id" },
  "asPerson": { "@id": "https://www.w3.org/ns/activitystreams#Person", "@type": "@id" },
  "asService": { "@id": "https://www.w3.org/ns/activitystreams#Service", "@type": "@id" },
  "asinbox": { "@id": "https://www.w3.org/ns/activitystreams#inbox", "@type": "@id", "@array": true },
  "assubject": { "@id": "https://www.w3.org/ns/activitystreams#subject", "@type": "@id", "@array": true },
  "asobject": { "@id": "https://www.w3.org/ns/activitystreams#object", "@type": "@id", "@array": true },
  "astarget": { "@id": "https://www.w3.org/ns/activitystreams#target", "@type": "@id", "@array": true },
  "asrelationship": { "@id": "https://www.w3.org/ns/activitystreams#relationship", "@type": "@id", "@array": true },
  "ascontext": { "@id": "https://www.w3.org/ns/activitystreams#context", "@type": "@id", "@array": true },
  "asinReplyTo": { "@id": "https://www.w3.org/ns/activitystreams#inReplyTo", "@type": "@id", "@array": true },
  "asactor": { "@id": "https://www.w3.org/ns/activitystreams#actor", "@type": "@id", "@array": true },
  "asupdated": "https://www.w3.org/ns/activitystreams#updated",
  "aspublished": "https://www.w3.org/ns/activitystreams#published",
  "assummary": "https://www.w3.org/ns/activitystreams#summary",
  "ascontent": "https://www.w3.org/ns/activitystreams#content",
  "asname": "https://www.w3.org/ns/activitystreams#name",
  "asicon": { "@id": "https://www.w3.org/ns/activitystreams#icon", "@type": "@id" },
  "asimage": { "@id": "https://www.w3.org/ns/activitystreams#image", "@type": "@id" },
  "asurl": { "@id": "https://www.w3.org/ns/activitystreams#url", "@type": "@id" },
  "ashref": { "@id": "https://www.w3.org/ns/activitystreams#href", "@type": "@id" },
  "asfollowing": { "@id": "https://www.w3.org/ns/activitystreams#following", "@type": "@id" },
  "asoutbox": { "@id": "https://www.w3.org/ns/activitystreams#outbox", "@type": "@id", "@array": true },
  "asitems": { "@id": "https://www.w3.org/ns/activitystreams#items", "@type": "@id", "@array": true },
  "asorderedItems": { "@id": "https://www.w3.org/ns/activitystreams#orderedItems", "@type": "@id", "@array": true },
  "astag": { "@id": "https://www.w3.org/ns/activitystreams#tag", "@type": "@id", "@array": true },
  "astotalItems": "https://www.w3.org/ns/activitystreams#totalItems",
  "asfirst": { "@id": "https://www.w3.org/ns/activitystreams#first", "@type": "@id" },
  "asnext": { "@id": "https://www.w3.org/ns/activitystreams#next", "@type": "@id" },
  "asCollection": { "@id": "https://www.w3.org/ns/activitystreams#Collection", "@type": "@id" },
  "asCollectionPage": { "@id": "https://www.w3.org/ns/activitystreams#CollectionPage", "@type": "@id" },
  "asOrderedCollection": { "@id": "https://www.w3.org/ns/activitystreams#OrderedCollection", "@type": "@id" },
  "asOrderedCollectionPage": { "@id": "https://www.w3.org/ns/activitystreams#OrderedCollectionPage", "@type": "@id" },
  "asAnnounce": { "@id": "https://www.w3.org/ns/activitystreams#Announce", "@type": "@id" },
  "asAudio": { "@id": "https://www.w3.org/ns/activitystreams#Audio", "@type": "@id" },
  "asImage": { "@id": "https://www.w3.org/ns/activitystreams#Image", "@type": "@id" },
  "asVideo": { "@id": "https://www.w3.org/ns/activitystreams#Video", "@type": "@id" },

  "siocreplyof": { "@id": "http://rdfs.org/sioc/ns#reply_of", "@type": "@id", "@array": true },
  "siocavatar": { "@id": "http://rdfs.org/sioc/ns#avatar", "@type": "@id" },

  "ldpinbox": { "@id": "http://www.w3.org/ns/ldp#inbox", "@type": "@id", "@array": true },
  "ldpcontains": { "@id": "http://www.w3.org/ns/ldp#contains", "@type": "@id", "@array": true },
  "ldpResource": { "@id": "http://www.w3.org/ns/ldp#Resource", "@type": "@id" },
  "ldpContainer": { "@id": "http://www.w3.org/ns/ldp#Container", "@type": "@id" },
  "ldpBasicContainer": { "@id": "http://www.w3.org/ns/ldp#BasicContainer", "@type": "@id" },
  "ldpRDFSource": { "@id": "http://www.w3.org/ns/ldp#RDFSource", "@type": "@id" },
  "ldpNonRDFSource": { "@id": "http://www.w3.org/ns/ldp#NonRDFSource", "@type": "@id" },

  "memOriginalResource": { "@id": "http://mementoweb.org/ns#OriginalResource", "@type": "@id" },
  "memMemento": { "@id": "http://mementoweb.org/ns#Memento", "@type": "@id" },
  "memoriginal": { "@id": "http://mementoweb.org/ns#original", "@type": "@id" },
  "memmemento": { "@id": "http://mementoweb.org/ns#memento", "@type": "@id" },
  "memtimegate": { "@id": "http://mementoweb.org/ns#timegate", "@type": "@id" },
  "memtimemap": { "@id": "http://mementoweb.org/ns#timemap", "@type": "@id" },
  "memmementoDateTime": "http://mementoweb.org/ns#mementoDateTime",

  "notifyWebSocketChannel2023": { "@id": "http://www.w3.org/ns/solid/notifications#WebSocketChannel2023", "@type": "@id" },
  "notifysubscription": { "@id": "http://www.w3.org/ns/solid/notifications#subscription", "@type": "@id", "@array": true },
  "notifychannel": { "@id": "http://www.w3.org/ns/solid/notifications#channel", "@type": "@id", "@array": true },
  "notifychannelType": { "@id": "http://www.w3.org/ns/solid/notifications#channelType", "@type": "@id" },
  "notifyreceiveFrom": { "@id": "http://www.w3.org/ns/solid/notifications#receiveFrom", "@type": "@id" },
  "notifysendTo": { "@id": "http://www.w3.org/ns/solid/notifications#sendTo", "@type": "@id" },
  "notifysender": { "@id": "http://www.w3.org/ns/solid/notifications#sender", "@type": "@id" },
  "notifyfeature": { "@id": "http://www.w3.org/ns/solid/notifications#feature", "@type": "@id", "@array": true },
  "notifyaccept": "http://www.w3.org/ns/solid/notifications#accept",
  "notifystartAt": "http://www.w3.org/ns/solid/notifications#startAt",
  "notifyendAt": "http://www.w3.org/ns/solid/notifications#endAt",
  "notifyrate": "http://www.w3.org/ns/solid/notifications#rate",
  "notifystate": "http://www.w3.org/ns/solid/notifications#state",

  "odrlAgreement": { "@id": "http://www.w3.org/ns/odrl/2/Agreement", "@type": "@id" },
  "odrlAssertion": { "@id": "http://www.w3.org/ns/odrl/2/Assertion", "@type": "@id" },
  "odrlOffer": { "@id": "http://www.w3.org/ns/odrl/2/Offer", "@type": "@id" },
  "odrlPolicy": { "@id": "http://www.w3.org/ns/odrl/2/Policy", "@type": "@id" },
  "odrlPrivacy": { "@id": "http://www.w3.org/ns/odrl/2/Privacy", "@type": "@id" },
  "odrlRequest": { "@id": "http://www.w3.org/ns/odrl/2/Request", "@type": "@id" },
  "odrlSet": { "@id": "http://www.w3.org/ns/odrl/2/Set", "@type": "@id" },
  "odrlTicket": { "@id": "http://www.w3.org/ns/odrl/2/Ticket", "@type": "@id" },
  "odrlaction": { "@id": "http://www.w3.org/ns/odrl/2/action", "@type": "@id", "@array": true },
  "odrlassignee": { "@id": "http://www.w3.org/ns/odrl/2/assignee", "@type": "@id", "@array": true },
  "odrlassigner": { "@id": "http://www.w3.org/ns/odrl/2/assigner", "@type": "@id", "@array": true },
  "odrlhasPolicy": { "@id": "http://www.w3.org/ns/odrl/2/hasPolicy", "@type": "@id", "@array": true },
  "odrlpermission": { "@id": "http://www.w3.org/ns/odrl/2/permission", "@type": "@id", "@array": true },
  "odrlprohibition": { "@id": "http://www.w3.org/ns/odrl/2/prohibition", "@type": "@id", "@array": true },
  "odrltarget": { "@id": "http://www.w3.org/ns/odrl/2/target", "@type": "@id" },
  "odrluid": { "@id": "http://www.w3.org/ns/odrl/2/uid", "@type": "@id" },

  "relpredecessorversion": { "@id": "https://www.w3.org/ns/iana/link-relations/relation#predecessor-version", "@type": "@id" },
  "rellatestversion": { "@id": "https://www.w3.org/ns/iana/link-relations/relation#latest-version", "@type": "@id" },

  "qbDataSet": { "@id": "http://purl.org/linked-data/cube#DataSet", "@type": "@id" },
  "dcatDataset": { "@id": "http://www.w3.org/ns/dcat#Dataset", "@type": "@id" },
  "voidDataset": { "@id": "http://rdfs.org/ns/void#Dataset", "@type": "@id" },

  "psodraft": { "@id": "http://purl.org/spar/pso/draft", "@type": "@id" },
  "psopublished": { "@id": "http://purl.org/spar/pso/published", "@type": "@id" },

  "citoagreesWith": { "@id": "http://purl.org/spar/cito/agreesWith", "@type": "@id", "@array": true },
  "citocites": { "@id": "http://purl.org/spar/cito/cites", "@type": "@id", "@array": true },
  "citocitesAsAuthority": { "@id": "http://purl.org/spar/cito/citesAsAuthority", "@type": "@id", "@array": true },
  "citocitesAsDataSource": { "@id": "http://purl.org/spar/cito/citesAsDataSource", "@type": "@id", "@array": true },
  "citocitesAsEvidence": { "@id": "http://purl.org/spar/cito/citesAsEvidence", "@type": "@id", "@array": true },
  "citocitesAsMetadataDocument": { "@id": "http://purl.org/spar/cito/citesAsMetadataDocument", "@type": "@id", "@array": true },
  "citocitesAsPotentialSolution": { "@id": "http://purl.org/spar/cito/citesAsPotentialSolution", "@type": "@id", "@array": true },
  "citocitesAsRecommendedReading": { "@id": "http://purl.org/spar/cito/citesAsRecommendedReading", "@type": "@id", "@array": true },
  "citocitesAsRelated": { "@id": "http://purl.org/spar/cito/citesAsRelated", "@type": "@id", "@array": true },
  "citocitesAsSourceDocument": { "@id": "http://purl.org/spar/cito/citesAsSourceDocument", "@type": "@id", "@array": true },
  "citocitesForInformation": { "@id": "http://purl.org/spar/cito/citesForInformation", "@type": "@id", "@array": true },
  "citocompiles": { "@id": "http://purl.org/spar/cito/compiles", "@type": "@id", "@array": true },
  "citoconfirms": { "@id": "http://purl.org/spar/cito/confirms", "@type": "@id", "@array": true },
  "citocontainsAssertionFrom": { "@id": "http://purl.org/spar/cito/containsAssertionFrom", "@type": "@id", "@array": true },
  "citocorrects": { "@id": "http://purl.org/spar/cito/corrects", "@type": "@id", "@array": true },
  "citocredits": { "@id": "http://purl.org/spar/cito/credits", "@type": "@id", "@array": true },
  "citocritiques": { "@id": "http://purl.org/spar/cito/critiques", "@type": "@id", "@array": true },
  "citoderides": { "@id": "http://purl.org/spar/cito/derides", "@type": "@id", "@array": true },
  "citodescribes": { "@id": "http://purl.org/spar/cito/describes", "@type": "@id", "@array": true },
  "citodisagreesWith": { "@id": "http://purl.org/spar/cito/disagreesWith", "@type": "@id", "@array": true },
  "citodiscusses": { "@id": "http://purl.org/spar/cito/discusses", "@type": "@id", "@array": true },
  "citodisputes": { "@id": "http://purl.org/spar/cito/disputes", "@type": "@id", "@array": true },
  "citodocuments": { "@id": "http://purl.org/spar/cito/documents", "@type": "@id", "@array": true },
  "citoextends": { "@id": "http://purl.org/spar/cito/extends", "@type": "@id", "@array": true },
  "citoincludesExcerptFrom": { "@id": "http://purl.org/spar/cito/includesExcerptFrom", "@type": "@id", "@array": true },
  "citoincludesQuotationFrom": { "@id": "http://purl.org/spar/cito/includesQuotationFrom", "@type": "@id", "@array": true },
  "citolinksTo": { "@id": "http://purl.org/spar/cito/linksTo", "@type": "@id", "@array": true },
  "citoobtainsBackgroundFrom": { "@id": "http://purl.org/spar/cito/obtainsBackgroundFrom", "@type": "@id", "@array": true },
  "citoobtainsSupportFrom": { "@id": "http://purl.org/spar/cito/obtainsSupportFrom", "@type": "@id", "@array": true },
  "citoparodies": { "@id": "http://purl.org/spar/cito/parodies", "@type": "@id", "@array": true },
  "citoplagiarizes": { "@id": "http://purl.org/spar/cito/plagiarizes", "@type": "@id", "@array": true },
  "citoqualifies": { "@id": "http://purl.org/spar/cito/qualifies", "@type": "@id", "@array": true },
  "citorefutes": { "@id": "http://purl.org/spar/cito/refutes", "@type": "@id", "@array": true },
  "citorepliesTo": { "@id": "http://purl.org/spar/cito/repliesTo", "@type": "@id", "@array": true },
  "citoretracts": { "@id": "http://purl.org/spar/cito/retracts", "@type": "@id", "@array": true },
  "citoreviews": { "@id": "http://purl.org/spar/cito/reviews", "@type": "@id", "@array": true },
  "citoridicules": { "@id": "http://purl.org/spar/cito/ridicules", "@type": "@id", "@array": true },
  "citospeculatesOn": { "@id": "http://purl.org/spar/cito/speculatesOn", "@type": "@id", "@array": true },
  "citosupports": { "@id": "http://purl.org/spar/cito/supports", "@type": "@id", "@array": true },
  "citoupdates": { "@id": "http://purl.org/spar/cito/updates", "@type": "@id", "@array": true },
  "citousesConclusionsFrom": { "@id": "http://purl.org/spar/cito/usesConclusionsFrom", "@type": "@id", "@array": true },
  "citousesDataFrom": { "@id": "http://purl.org/spar/cito/usesDataFrom", "@type": "@id", "@array": true },
  "citousesMethodIn": { "@id": "http://purl.org/spar/cito/usesMethodIn", "@type": "@id", "@array": true },

  "doapSpecification": { "@id": "http://usefulinc.com/ns/doap#Specification", "@type": "@id" },
  "specrequirement": { "@id": "http://www.w3.org/ns/spec#requirement", "@type": "@id", "@array": true },
  "specstatement": { "@id": "http://www.w3.org/ns/spec#statement" },
  "specrequirementSubject": { "@id": "http://www.w3.org/ns/spec#requirementSubject", "@type": "@id" },
  "specrequirementLevel": { "@id": "http://www.w3.org/ns/spec#requirementLevel", "@type": "@id" },
  "spectestSuite": { "@id": "http://www.w3.org/ns/spec#testSuite", "@type": "@id", "@array": true },
  "specimplementationReports": { "@id": "http://www.w3.org/ns/spec#implementationReports", "@type": "@id", "@array": true },
  "specrequirementReference": { "@id": "http://www.w3.org/ns/spec#requirementReference", "@type": "@id" },
  "testdescriptionTestCase": { "@id": "http://www.w3.org/2006/03/test-description#TestCase", "@type": "@id" },
  "testdescriptionreviewStatus": { "@id": "http://www.w3.org/2006/03/test-description#reviewStatus", "@type": "@id" },
  "specchangelog": { "@id": "http://www.w3.org/ns/spec#changelog", "@type": "@id", "@array": true },
  "specchange": { "@id": "http://www.w3.org/ns/spec#change", "@type": "@id", "@array": true },
  "specchangeSubject": { "@id": "http://www.w3.org/ns/spec#changeSubject", "@type": "@id" },
  "specchangeClass": { "@id": "http://www.w3.org/ns/spec#changeClass", "@type": "@id" }
};
export const ChangeClasses = {
  'http://www.w3.org/ns/spec#ChangeClass1': '1',
  'http://www.w3.org/ns/spec#ChangeClass2': '2',
  'http://www.w3.org/ns/spec#ChangeClass3': '3',
  'http://www.w3.org/ns/spec#ChangeClass4': '4',
  'http://www.w3.org/ns/spec#ChangeClass5': '5'
};
export const SecretAgentNames = ['Abraham Lincoln', 'Admiral Awesome', 'Anonymous Coward', 'Believe it or not', 'Creative Monkey', 'Senegoid', 'Dog from the Web', 'Ekrub', 'Elegant Banana', 'Foo Bar', 'Lbmit', 'Lunatic Scholar', 'NahuLcm', 'Noslen', 'Okie Dokie', 'Samurai Cat', 'Vegan Superstar'];
export const RefAreas = { "AF": "Afghanistan", "A9": "Africa", "AL": "Albania", "DZ": "Algeria", "AS": "American Samoa", "L5": "Andean Region", "AD": "Andorra", "AO": "Angola", "AG": "Antigua and Barbuda", "1A": "Arab World", "AR": "Argentina", "AM": "Armenia", "AW": "Aruba", "AU": "Australia", "AT": "Austria", "AZ": "Azerbaijan", "BS": "Bahamas, The", "BH": "Bahrain", "BD": "Bangladesh", "BB": "Barbados", "BY": "Belarus", "BE": "Belgium", "BZ": "Belize", "BJ": "Benin", "BM": "Bermuda", "BT": "Bhutan", "BO": "Bolivia", "BA": "Bosnia and Herzegovina", "BW": "Botswana", "BR": "Brazil", "BN": "Brunei Darussalam", "BG": "Bulgaria", "BF": "Burkina Faso", "BI": "Burundi", "CV": "Cabo Verde", "KH": "Cambodia", "CM": "Cameroon", "CA": "Canada", "S3": "Caribbean small states", "KY": "Cayman Islands", "CF": "Central African Republic", "TD": "Chad", "JG": "Channel Islands", "CL": "Chile", "CN": "China", "CO": "Colombia", "KM": "Comoros", "CD": "Congo, Dem. Rep.", "CG": "Congo, Rep.", "CR": "Costa Rica", "CI": "Cote d'Ivoire", "HR": "Croatia", "CU": "Cuba", "CW": "Curacao", "CY": "Cyprus", "CZ": "Czech Republic", "DK": "Denmark", "DJ": "Djibouti", "DM": "Dominica", "DO": "Dominican Republic", "Z4": "East Asia & Pacific (all income levels)", "4E": "East Asia & Pacific (developing only)", "C4": "East Asia and the Pacific (IFC classification)", "EC": "Ecuador", "EG": "Egypt, Arab Rep.", "SV": "El Salvador", "GQ": "Equatorial Guinea", "ER": "Eritrea", "EE": "Estonia", "ET": "Ethiopia", "XC": "Euro area", "Z7": "Europe & Central Asia (all income levels)", "7E": "Europe & Central Asia (developing only)", "C5": "Europe and Central Asia (IFC classification)", "EU": "European Union", "FO": "Faeroe Islands", "FJ": "Fiji", "FI": "Finland", "FR": "France", "PF": "French Polynesia", "GA": "Gabon", "GM": "Gambia, The", "GE": "Georgia", "DE": "Germany", "GH": "Ghana", "GR": "Greece", "GL": "Greenland", "GD": "Grenada", "GU": "Guam", "GT": "Guatemala", "GN": "Guinea", "GW": "Guinea-Bissau", "GY": "Guyana", "HT": "Haiti", "XE": "Heavily indebted poor countries (HIPC)", "XD": "High income", "XS": "High income: OECD", "XR": "High income: nonOECD", "HN": "Honduras", "HK": "Hong Kong SAR, China", "HU": "Hungary", "IS": "Iceland", "IN": "India", "ID": "Indonesia", "IR": "Iran, Islamic Rep.", "IQ": "Iraq", "IE": "Ireland", "IM": "Isle of Man", "IL": "Israel", "IT": "Italy", "JM": "Jamaica", "JP": "Japan", "JO": "Jordan", "KZ": "Kazakhstan", "KE": "Kenya", "KI": "Kiribati", "KP": "Korea, Dem. Rep.", "KR": "Korea, Rep.", "KV": "Kosovo", "KW": "Kuwait", "KG": "Kyrgyz Republic", "LA": "Lao PDR", "ZJ": "Latin America & Caribbean (all income levels)", "XJ": "Latin America & Caribbean (developing only)", "L4": "Latin America and the Caribbean", "C6": "Latin America and the Caribbean (IFC classification)", "LV": "Latvia", "XL": "Least developed countries: UN classification", "LB": "Lebanon", "LS": "Lesotho", "LR": "Liberia", "LY": "Libya", "LI": "Liechtenstein", "LT": "Lithuania", "XO": "Low & middle income", "XM": "Low income", "XN": "Lower middle income", "LU": "Luxembourg", "MO": "Macao SAR, China", "MK": "Macedonia, FYR", "MG": "Madagascar", "MW": "Malawi", "MY": "Malaysia", "MV": "Maldives", "ML": "Mali", "MT": "Malta", "MH": "Marshall Islands", "MR": "Mauritania", "MU": "Mauritius", "MX": "Mexico", "L6": "Mexico and Central America", "FM": "Micronesia, Fed. Sts.", "ZQ": "Middle East & North Africa (all income levels)", "XQ": "Middle East & North Africa (developing only)", "C7": "Middle East and North Africa (IFC classification)", "XP": "Middle income", "MD": "Moldova", "MC": "Monaco", "MN": "Mongolia", "ME": "Montenegro", "MA": "Morocco", "MZ": "Mozambique", "MM": "Myanmar", "NA": "Namibia", "NP": "Nepal", "NL": "Netherlands", "NC": "New Caledonia", "NZ": "New Zealand", "NI": "Nicaragua", "NE": "Niger", "NG": "Nigeria", "M2": "North Africa", "XU": "North America", "MP": "Northern Mariana Islands", "NO": "Norway", "XY": "Not classified", "OE": "OECD members", "OM": "Oman", "S4": "Other small states", "S2": "Pacific island small states", "PK": "Pakistan", "PW": "Palau", "PA": "Panama", "PG": "Papua New Guinea", "PY": "Paraguay", "PE": "Peru", "PH": "Philippines", "PL": "Poland", "PT": "Portugal", "PR": "Puerto Rico", "QA": "Qatar", "RO": "Romania", "RU": "Russian Federation", "RW": "Rwanda", "WS": "Samoa", "SM": "San Marino", "ST": "Sao Tome and Principe", "SA": "Saudi Arabia", "SN": "Senegal", "RS": "Serbia", "SC": "Seychelles", "SL": "Sierra Leone", "SG": "Singapore", "SX": "Sint Maarten (Dutch part)", "SK": "Slovak Republic", "SI": "Slovenia", "S1": "Small states", "SB": "Solomon Islands", "SO": "Somalia", "ZA": "South Africa", "8S": "South Asia", "C8": "South Asia (IFC classification)", "SS": "South Sudan", "L7": "Southern Cone Extended", "ES": "Spain", "LK": "Sri Lanka", "KN": "St. Kitts and Nevis", "LC": "St. Lucia", "MF": "St. Martin (French part)", "VC": "St. Vincent and the Grenadines", "C9": "Sub-Saharan Africa (IFC classification)", "ZG": "Sub-Saharan Africa (all income levels)", "ZF": "Sub-Saharan Africa (developing only)", "A4": "Sub-Saharan Africa excluding South Africa", "A5": "Sub-Saharan Africa excluding South Africa and Nigeria", "SD": "Sudan", "SR": "Suriname", "SZ": "Swaziland", "SE": "Sweden", "CH": "Switzerland", "SY": "Syrian Arab Republic", "TJ": "Tajikistan", "TZ": "Tanzania", "TH": "Thailand", "TL": "Timor-Leste", "TG": "Togo", "TO": "Tonga", "TT": "Trinidad and Tobago", "TN": "Tunisia", "TR": "Turkey", "TM": "Turkmenistan", "TC": "Turks and Caicos Islands", "TV": "Tuvalu", "UG": "Uganda", "UA": "Ukraine", "AE": "United Arab Emirates", "GB": "United Kingdom", "US": "United States", "XT": "Upper middle income", "UY": "Uruguay", "UZ": "Uzbekistan", "VU": "Vanuatu", "VE": "Venezuela, RB", "VN": "Vietnam", "VI": "Virgin Islands (U.S.)", "PS": "West Bank and Gaza", "1W": "World", "YE": "Yemen, Rep.", "ZM": "Zambia", "ZW": "Zimbabwe" };
export const Languages = { "ab": "аҧсуа", "aa": "Afaraf", "af": "Afrikaans", "ak": "Akan", "sq": "Shqip", "am": "አማርኛ", "ar": "العربية", "an": "Aragonés", "hy": "Հայերեն", "as": "অসমীয়া", "av": "Aвар", "ae": "Avesta", "ay": "Aymar", "az": "Azərbaycanca", "bm": "Bamanankan", "ba": "башҡорт", "eu": "Euskara", "be": "Беларуская", "bn": "বাংলা", "bh": "भोजपुरी", "bi": "Bislama", "bs": "Bosanski", "br": "Brezhoneg", "bg": "български", "my": "ဗမာစာ", "ca": "Català", "ch": "Chamoru", "ce": "нохчийн мотт", "ny": "chiCheŵa", "zh": "中文", "cv": "чӑваш чӗлхи", "kw": "Kernewek", "co": "Corsu", "cr": "ᓀᐦᐃᔭᐍᐏᐣ", "hr": "Hrvatski", "cs": "Čeština", "da": "Dansk", "dv": "ދިވެހި", "nl": "Nederlands", "en": "English", "eo": "Esperanto", "et": "Eesti", "ee": "Eʋegbe", "fo": "Føroyskt", "fj": "Vosa Vakaviti", "fi": "Suomi", "fr": "Français", "ff": "Fulfulde", "gl": "Galego", "ka": "ქართული", "de": "Deutsch", "el": "Ελληνικά", "gn": "Avañeẽ", "gu": "ગુજરાતી", "ht": "Kreyòl ayisyen", "ha": "Hausa, هَوُسَ", "he": "עברית", "hz": "Otjiherero", "hi": "हिन्दी", "ho": "Hiri Motu", "hu": "Magyar", "ia": "Interlingua", "id": "Bahasa Indonesia", "ie": "Interlingue", "ga": "Gaeilge", "ig": "Asụsụ Igbo", "ik": "Iñupiaq", "io": "Ido", "is": "Íslenska", "it": "Italiano", "iu": "ᐃᓄᒃᑎᑐᑦ", "ja": "日本語", "jv": "Basa Jawa", "kl": "Kalaallisut", "kn": "ಕನ್ನಡ", "kr": "Kanuri", "ks": "कश्मीरी", "kk": "Қазақ тілі", "km": "ភាសាខ្មែរ", "ki": "Gĩkũyũ", "rw": "Ikinyarwanda", "ky": "кыргыз", "kv": "коми кыв", "kg": "KiKongo", "ko": "한국어", "ku": "Kurdî", "kj": "Kuanyama", "la": "Latina", "lb": "Lëtzebuergesch", "lg": "Luganda", "li": "Limburgs", "ln": "Lingála", "lo": "ພາສາລາວ", "lt": "Lietuvių", "lu": "Luba-Katanga", "lv": "Latviešu", "gv": "Gaelg", "mk": "македонски", "mg": "Malagasy", "ms": "Bahasa Melayu", "ml": "മലയാളം", "mt": "Malti", "mi": "te reo Māori", "mr": "मराठी", "mh": "Kajin M̧ajeļ", "mn": "монгол", "na": "Naoero", "nv": "Diné bizaad", "nb": "Norsk bokmål", "nd": "isiNdebele", "ne": "नेपाली", "ng": "Owambo", "nn": "Nynorsk", "no": "Norsk", "ii": "Sichuan Yi", "nr": "isiNdebele", "oc": "Occitan", "oj": "ᐊᓂᔑᓈᐯᒧᐎᓐ", "cu": "Словѣньскъ", "om": "Afaan Oromoo", "or": "ଓଡ଼ିଆ", "os": "ирон æвзаг", "pa": "ਪੰਜਾਬੀ", "pi": "पाऴि", "fa": "فارسی", "pl": "Polski", "ps": "پښتو", "pt": "Português", "qu": "Runa Simi", "rm": "Rumantsch", "rn": "kiRundi", "ro": "Română", "ru": "русский язык", "sa": "संस्कृतम्", "sc": "sardu", "sd": "सिन्धी", "se": "Davvisámegiella", "sm": "Gagana Samoa", "sg": "Sängö", "sr": "српски", "gd": "Gàidhlig", "sn": "chiShona", "si": "සිංහල", "sk": "slovenčina", "sl": "slovenščina", "so": "Soomaaliga", "st": "Sesotho", "es": "Español", "su": "Basa Sunda", "sw": "Kiswahili", "ss": "SiSwati", "sv": "Svenska", "ta": "தமிழ்", "te": "తెలుగు", "tg": "тоҷикӣ", "th": "ไทย", "ti": "ትግርኛ", "bo": "བོད་ཡིག", "tk": "Türkmen", "tl": "Tagalog", "tn": "Setswana", "to": "faka Tonga", "tr": "Türkçe", "ts": "Xitsonga", "tt": "татарча", "tw": "Twi", "ty": "Reo Tahiti", "ug": "ئۇيغۇرچە‎", "uk": "українська", "ur": "اردو", "uz": "O‘zbek", "ve": "Tshivenḓa", "vi": "Tiếng Việt", "vo": "Volapük", "wa": "Walon", "cy": "Cymraeg", "wo": "Wollof", "fy": "Frysk", "xh": "IsiXhosa", "yi": "ייִדיש", "yo": "Yorùbá", "za": "Saɯ cueŋƅ" };
