(define 
	(addToList x y)
		(if (null? x) 
			y 
		(cons (car x) (addToList (cdr x) y)
			)
		
	)
)

