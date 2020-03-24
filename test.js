
// Taking a regular expression
var re = /\\s{2,}/;
// Taking a string as input
var string = new String("
() 4857-8000                                        
(01) 773-6528                                      
() 80-6823                                          
(096) 52-0937                                      
() 372-5861                                        
(011) 4584-5321                                    
() 374-0590                                        
() 371-2992                                        
() 857-8118                                        
() 372-5861                                        
() 857-8182                                        
() 80-6823                                          
() 88-0412                                          
(011) 4801-9514                                    
(011) 4857-7841                                    
(011) 4611-6554                                    
(03406) 1540-5035                                  
(011) 4857-8118                                    
() 374-0590                                        

 ");
// Calling replace() function to replace
var newstring = string.replace(re, '/n');
// Printing new string with replaced items
document.write(newstring);
