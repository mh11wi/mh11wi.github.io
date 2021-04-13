$(document).ready(function() {
  $('#courseTable').dataTable({
      "pageLength": 15,
      "lengthChange": false,
      "searching": true,
      "info": false,
      "order": [[ 3, "desc" ],[ 0, "asc" ]]
  });
    
  $('#course-modal').on('shown.bs.modal', function(e) {
    var id = $(e.relatedTarget).data('id');
    var name, desc;

    switch (id) {
      case "compco845":
        name = "Strategic Systems";
        desc = "Utilize conventional information systems in innovative and competitive ways using Strategic Information Systems. Establish a fundamental understanding of how information systems evolved from transaction processing systems to management information systems, to decision support systems, and their impact on how the business firm competes.";
        break;

      case "comp10065":
        name = "PHP & JavaScript";
        desc = "Demonstrate proficiency in the two major scripting languages used in the creation of dynamic web pages: PHP and JavaScript.";
        break;

      case "comp10204":
        name = "Programming in .NET";
        desc = "Design, develop and implement interactive, user friendly software. Focus on GUI (Graphical User Interface), data base processing and file processing in a object-oriented programming enviornment. Concentrate on event-driven programming logic; as it applies to navigation amongst and within forms, user data entry validation, and data base and file processing. Create completely operational applications which will demonstrate ease of use and consistent interface designs. Utilize Visual C# .NET in conjunction with Microsoft data base technology as the programming language.";
        break;

      case "comp10205":
        name = "Data Structures and Algorithms";
        desc = "Identify, describe and apply basic data structures and algorithms used to solve common programming problems. Utilize searching, sorting, arrays, lists, stacks, queues and trees in a number of lab assignments. The Java programming language is used to deliver the course. The techniques and methods are applicable in any programming language.";
        break;

      case "compco859":
        name = "Database Theory";
        desc = "Demonstrate knowledge of database terms, SQL, Normalization, Entity Relationship Diagramming, Physical Structures and Database Administration.";
        break;

      case "busn10123":
        name = "Entrepreneurship in Today's World";
        desc = "Identify, define and understand entrepreneurship in today's world. Develop a knowledge of issues of technology, entrepreneurship, social entrepreneurship, virtual businesses and e-commerce. Explore entrepreneurship and its influence on our culture. Illuminate innovative companies with unique strategies through   case studies. Demonstrate how entrepreneurship is evolving in step with the technology through the study of the complexities of technology and entrepreneurship integration.";
        break;

      case "comp10066":
        name = "Software Quality & Testing";
        desc = "Identify, define and understand the steps and procedures to ensure the production of high quality software. Build and design test procedures, test planning, test documentation and quality feedback mechanisms through hands-on labs and exercises.";
        break;

      case "mgmt10008":
        name = "Project Management for IT";
        desc = "Apply the fundamentals of project management to the field of information technology. Utilize Project Management methodologies according to the Project Management Institutes PMBOK, (Project Management Body of Knowledge). Demonstrate an understanding and application of scheduling, scope, budgeting, risk assessment, critical path and resources through   case studies.";
        break;

      case "comp10067":
        name = "Server, Platforms & Networking Security";
        desc = "Diagram, install and configure major components, middleware, operating systems and security mechanisms commonly employed in web-based applications.";
        break;

      case "comp10069":
        name = "Microsoft Office Power User";
        desc = "Demonstrate an understanding of the advanced capabilities of the Microsoft Office suite. Topics will include integration and interoperability, using external data and automation through macro/script programming.";
        break;

      case "compco835":
        name = "Object Oriented Systems";
        desc = "Develop an understanding of object-oriented methodology including complexity, modularity, object based systems thinking and Unified Modeling Language (UML).";
        break;

      case "comp10126":
        name = "Oracle PL/SQL Programming";
        desc = "Explore advanced topics in SQL, including functions, subqueries and complex joins. Assemble PL/SQL statements into useful blocks of code. Demonstrate an understanding of general programming structures, conditional control, iterative control and error handling. Additional topics will include cursor, triggers, procedures, functions and packages.";
        break;

      case "compco826":
        name = "Introduction to Systems Analysis and Design";
        desc = "Identify the steps involved in approaches and investigating system requirements. Develop an understanding of the principles in modeling and evaluating alternatives and strategies. Create project schedules, requirements analysis and cost/benefit analysis. Design outputs and inputs and develop an understanding of Human-Computer Interaction and the processes involved in systems operation and support.";
        break;

      case "comp10132":
        name = "Business Fundamentals for IT";
        desc = "Review and discuss   case studies and scenario-based exercises with emphasis on their application to IT. Resolve the issues using the classic tools of business administration for making informed management decisions.";
        break;

      case "comp10064":
        name = "Computer Training & Technical Writing";
        desc = "Develop the skills necessary for training software users and create support documents and build presentation skills to facilitate this. Create training materials with focus on learning modalities including detailed step-by-step instructions and Computer Based Training videos. Create a report that compares two technologies and makes a recommendation for adoption. Deliver practice training sessions which will emphasize presentation skills.";
        break;

      case "comp10062":
        name = "Programming in Java";
        desc = "Design object-oriented apps in Java that make effective use of encapsulation, inheritance, polymorphism, interfaces, association, and arrays of objects. Create desktop apps that display graphics and use Graphical User Interface components to communicate with the user. Implement apps that allow the user to open, view, and modify the contents of text files. Extend programming and problem solving skills developed in Programming Fundamentals to the Java programming language.";
        break;

      case "commll041":
        name = "Communication";
        desc = "Develop thinking, writing, reading, speaking and listening skills with emphasis on effective written communication.";
        break;

      case "compco910":
        name = "Introduction to Networking";
        desc = "Administer Microsoft Windows and UNIX hosts within a virtualized environment. Design and implement common network-level services. Create and utilize software development environments.";
        break;

      case "compco710":
        name = "HTML & CSS";
        desc = "Create Web Pages using the HyperText Markup Langauge (HTML). Format Web pages using Cascading Style Sheets (CSS). Create Web pages that include lists, links, images, Web Tables, and Web Forms, styled with CSS. Use Web Accessibility Initiative (WAI) rules for accessibility compliance in design.";
        break;

      case "cse700":
        name = "Foundations of Scientific Computing";
        desc = "An introduction to scientific computing, modeling, and numerical methods covering such topics as Taylor series and truncation errors, numerical differentiation and integration, constrained optimization, and solving sets of: linear equations; linear algebraic equations; ordinary differential equations; and partial differential equations.";
        break;

      case "cse701":
        name = "Foundations of Modern Scientific Computing";
        desc = "An introduction to modern scientific programming providing a background to such topics as binary systems, Unix and Windows based operating systems, parallel and distributed computing, and popular programming languages.";
        break;

      case "math742":
        name = "Methods in Applied Mathematics II";
        desc = "Partial differential equations: elliptic, parabolic, and hyperbolic equations using distributional, integral equation, and variational methods, and non-linear problems.";
        break;

      case "math741":
        name = "Methods in Applied Mathematics I";
        desc = "Ordinary differential equations: well-posed initial value problems (i.e. existence, uniqueness, continuation and continuous dependence), general non-autonomous linear systems, special linear systems (autonomous, periodic), classical stability theory, bifurcation and asymptotic methods.";
        break;

      case "math6mb3":
        name = "Matematical Biology";
        desc = "Introduction to mathematical modelling of infectious disease (ID) transmission. Application of ID models to understanding historical epidemics and current problems in infectious disease control. The primary focus will be on deterministic models, but stochastic models will also be discussed. Introduction to software for mathematical typesetting, graphics, simulations, phase portraits and bifurcation diagrams.";
        break;

      case "math747":
        name = "Topics in Mathematical Biology";
        desc = "Learn the basics of evolutionary game theory and become familiar with some primary research literature in the field. Topics include optimality models, optimality vs. evolutionary stability, discrete strategy games, continuous strategy games, asymmetric games, games between relatives, replicator dynamics, and adaptive dynamics.";
        break;

      case "math4p92":
        name = "Topics in Number Theory and Cryptography";
        desc = "Topics may include algebraic number theory, analytic number theory and cryptography.";
        break;

      case "math4p71":
        name = "Combinatorics";
        desc = "Review of basic enumeration including distribution problems, inclusion-exclusion and generating functions. Polya theory. Finite fields. Orthogonal Latin squares, affine and projective planes. Coding theory and cryptography.";
        break;

      case "math4p09":
        name = "Solitons and Nonlinear Wave Equations";
        desc = "Introduction to solitons. Linear and nonlinear travelling waves. Nonlinear evolution equations (Korteweg de Vries, nonlinear Schrodinger, sine-Gordon). Soliton solutions and their interaction properties. Lax pairs, inverse scattering, zero-curvature equations and Backlund transformations, Hamiltonian structures, and conservation laws.";
        break;

      case "math4f90":
        name = "Honours Project";
        desc = "Independent project in an area of pure or applied mathematics, or mathematics education.<br><br>Under the supervision of Dr. Thomas Wolf, I computed the infinitessimal symmetries (up to degree 12) for eight systems of Non-Abelian Laurent ODEs in order to determine their integrability.";
        break;

      case "math3p97":
        name = "Introductory Topology";
        desc = "Introduction to metric and topological spaces; connectedness, completeness, countability axioms, separation properties, covering properties, metrization of topological spaces.";
        break;

      case "math3p86":
        name = "Applied Multivariate Statistics";
        desc = "Matrix algebra and random vector, sample geometry and random sampling, multivariate normal distribution, inference about mean, comparison of several multivariate means, multivariate linear regression model, principle components, factor analysis, covariance analysis, canonical correlation analysis, discrimination and classification, cluster analysis, computational techniques and use of SAS, Maple or other statistical packages and related topics.";
        break;

      case "math3p13":
        name = "Abstract Algebra";
        desc = "Further topics in group theory: homomorphisms and isomorphism theorems, structure of finite abelian groups. Rings and ideals; polynomial rings; quotient rings. Division rings and fields; field extensions; finite fields; constructability.";
        break;
        
      case "math3p12":
        name = "Applied Algebra";
        desc = "Group theory with applications. Topics include modular arithmetic, symmetry groups and the dihedral groups, subgroups, cyclic groups, permutation groups, group isomorphism, Burnside's theorem, cosets and Lagrange's theorem, direct products and cryptography, normal subgroups and factor groups.";
        break;

      case "math3p09":
        name = "Partial Differential Equations";
        desc = "Survey of linear and nonlinear partial differential equations. Analytical solution methods. Existence and uniqueness theorems, variational principles, symmetries, and conservation laws. Emphasis on applications to physical sciences. Use of Maple.";
        break;

      case "math3p08":
        name = "Advanced Differential Equations";
        desc = "Linear second-order differential equations and special functions. Introduction to Sturm-Liouville theory and series expansions by orthogonal functions. Boundary value problems for the heat equation, wave equation and Laplace equation. Green's functions. Emphasis on applications to physical sciences. Use of Maple.";
        break;

      case "math3p04":
        name = "Complex Analysis";
        desc = "Algebra and geometry of complex numbers, complex functions and their derivatives; analytic functions; harmonic functions; complex exponential and trigonometric functions and their inverses; contour integration; Cauchy's theorem and its consequences; Taylor and Laurent series; residues.";
        break;

      case "math3p03":
        name = "Real Analysis";
        desc = "Approximation of functions by algebraic and trigonometric polynomials (Taylor and Fourier series); Weierstrass approximation theorem; Riemann integral of functions on R<sup>n</sup>, the Riemann-Stieltjes integral on R; improper integrals; Fourier transforms.";
        break;

      case "math2p82":
        name = "Mathematical Statistics I";
        desc = "Random sampling, descriptive statistics, Central Limit Theorem, sampling distributions related to normality; point estimation: measurements for estimation performance, methods of moments, maximum likelihood, ordinary/weighted least squares; confidence intervals, testing procedures, and their relation for population means, difference between means, variances, ratio of variances, proportions and difference between proportions.";
        break;

      case "math2p81":
        name = "Probability";
        desc = "Probability, events, algebra of sets, independence, conditional probability, Bayes' theorem; random variables and their univariate, multivariate, marginal and conditional distributions. Expected value of a random variable, the mean, variance and higher moments, moment generating function, Chebyshev's theorem. Some common discrete and continuous distributions: Binomial, Poisson, hypergeometric, normal, uniform and exponential. Use of SAS, Maple or other statistical packages.";
        break;

      case "math2p71":
        name = "Introduction to Combinatorics";
        desc = "Counting, inclusion and exclusion, pigeonhole principle, permutations and combinations, derangements, binomial expansions, introduction to discrete probability; to graph theory, Eulerian graphs, Hamilton Cycles, colouring, planarity, trees.";
        break;

      case "math2p13":
        name = "Abstract Linear Algebra";
        desc = "Vector spaces over fields; linear transformations; diagonalization and the Cayley-Hamilton theorem; Jordan canonical form; linear operators on inner product spaces; the spectral theorem; bilinear and quadratic forms.";
        break;

      case "math2p12":
        name = "Linear Algebra II";
        desc = "Finite dimensional real vector spaces and inner product spaces; matrix and linear transformation; eigenvalues and eigenvectors; the characteristic equation and roots of polynomials; diagonalization; complex vector spaces and inner product spaces; selected applications; use of a computer algebra system and selected applications.";
        break;

      case "math2p08":
        name = "Ordinary Differential Equations";
        desc = "Linear and nonlinear differential equations. Basic existence and uniqueness theory. Analytical and numerical solution methods; asymptotic behaviour. Qualitative analysis of autonomous systems including periodic cycles and steady-states. Examples of conservative systems and dissipative systems. Modelling and applications of differential equations. Use of Maple.";
        break;

      case "math2p04":
        name = "Basic Concepts of Analysis";
        desc = "Sets; mappings, count ability; properties of the real number system; inner product, norm, and the Cauchy-Schwarz inequality; compactness and basic compactness theorems (Cantor's theorem, the Bolzano-Weierstrass theorem, the Heine-Borel theorem); connectedness; convergence of sequences; Cauchy sequences; continuous and uniformly continuous functions.";
        break;

      case "math2p03":
        name = "Multivariate and Vector Calculus";
        desc = "Multivariable integration, polar, cylindrical and spherical coordinates, vector algebra, parameterized curves and surfaces, vector calculus, arc length, curvature and torsion, projectile and planetary motion, line integrals, vector fields, Green's theorem, Stokes' theorem, the use of computer algebra systems to manipulate vectors, plot surfaces and curves, determine line integrals and analyze vector fields.";
        break;

      case "math2f40":
        name = "Math Integrated with Computers and Applications II";
        desc = "Theory and application of mathematical models; discrete dynamical systems; time series and their application to the prediction of weather and sunspots; Markov chains; empirical models using interpolation and regression; continuous stochastic models; simulation of normal, exponential and chi-square random variables; queuing models and simulations, use of a computer algebra system.";
        break;

      case "math1p40":
        name = "Math Integrated with Computers and Applications I";
        desc = "Exploration of ideas and problems in algebra differential equations and dynamical systems using computers. Topics include number theory, integers mod p, roots of equations, fractals, predator-prey models and the discrete logistic equation for population growth.";
        break;

      case "math1p12":
        name = "Linear Algebra I";
        desc = "Introduction to finite dimensional real vector spaces; systems of linear equations: matrix operations and inverses, determinants. Vectors in R<sup>2</sup> and R<sup>3</sup>: Dot product and norm, cross product, the geometry of lines and planes in R<sup>3</sup>; Euclidean n-space, linear transformations for R<sup>n</sup> to R<sup>m</sup>, complex numbers, selected applications and use of a computer algebra system.";
        break;

      case "math1p02":
        name = "Calculus Concepts II";
        desc = "Integral calculus emphasizing concepts, theory and computers to solve problems. Further integration techniques. Applications to areas between curves, volumes, arc length and probabilities. Multivariable calculus: partial derivatives, optimization of functions of two variables. Sequences and series: convergence tests, Taylor and Maclaurin series and applications. Differential Equations: direction fields, separable equations, growth and decay, the logistic equation, linear equations. Use of Maple.";
        break;

      case "math1p01":
        name = "Calculus Concepts I";
        desc = "Differential calculus with an emphasis on concepts and the use of both theory and computers to solve problems. Precalculus topics, limits, continuity and the intermediate value theorem, derivatives and differentiability, implicit differentiation, linear approximation, mean value theorem with proof and applications, max and min, related rates, curve sketching, l'Hospital's rule, antiderivatives, Riemann sums, FTC with proof, integration by substitution. Use of Maple.";
        break;

      case "fren1f90":
        name = "Intermediate French";
        desc = "Grammar review; literary, cultural and journalistic readings; practice in reading, writing, oral expression and comprehension.";
        break;

      case "chys1f90":
        name = "Introduction to Child and Youth Studies";
        desc = "Theories, methods and issues involved in studying children and youth from a multidisciplinary perspective. Topics may include the history of childhood, family life, peer relations and children and youth with special needs.";
        break;

      case "chys2p10":
        name = "Child and Youth Development";
        desc = "Basic concepts and contemporary issues in the development of the child and youth, including processes in cognitive and social-emotional patterns of change. Developmental theory and research provides the conceptual framework.";
        break;

      case "chys2p15":
        name = "Principles of Service-Learning Practicum";
        desc = "Emphasis on applying service-learning theories and principles within a community/educational placement and examining the placement experience within multidisciplinary perspectives.";
        break;

      case "educ1f95":
        name = "Introduction to Foundations of Education";
        desc = "Historical, philosophical, sociological and psychological dimensions of formal schooling within a Canadian context.";
        break;

      case "biol1f25":
        name = "Biology: A Human Perspective";
        desc = "For non-science majors: contemporary issues of human concern; genetics and biology of cancer and obesity; learning, memory and addiction.";
        break;

      case "musi1f10":
        name = "Introduction to Classical Music";
        desc = "Concepts and terminology of Western classical art music from the 17th through 20th centuries. Development of critical listening and writing skills.";
        break;

      case "apco2p01":
        name = "Personal Computers and Networks";
        desc = "Inner workings of modern computers from a user's point of view. Understanding the hardware, network and system software. Topics include CPUs, memory, video, input/output, networks, security, installation of operating systems and hands-on trouble shooting.";
        break;
        
      default:
        name = "Course Name";
        desc = "Course Description";
        break;
        
    }

    $('#courseName').html(name);
    $('#courseDescription').html(desc);
  });  
});
