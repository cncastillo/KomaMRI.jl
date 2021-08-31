var documenterSearchIndex = {"docs":
[{"location":"#Home","page":"Home","title":"Home","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Grad","category":"page"},{"location":"#MRIsim.Grad","page":"Home","title":"MRIsim.Grad","text":"Grad(A,T)\n\nSquare gradient object.\n\nArguments\n\nA::Real := Gradient amplitude [T].\nT::Real := Gradient duration [s].\n\nExamples\n\njulia> Grad(1,1)\nGrad(1, 1)\n\n\n\n\n\n","category":"type"},{"location":"","page":"Home","title":"Home","text":"Sequence","category":"page"},{"location":"#MRIsim.Sequence","page":"Home","title":"MRIsim.Sequence","text":"Sequence(GR)\n\nSequence object.\n\nArgument\n\nGR::Array{Grad,2} := Gradient array, fist axis is the dimension (x,y,z) and the second one is time.\n\nExamples\n\njulia> A = Sequence([Grad(1,1) for i=1:2,j=1:2])\nSequence(Grad[Grad(1, 1) Grad(1, 1); Grad(1, 1) Grad(1, 1)])\n\njulia> B = Sequence([Grad(2,2) for i=1:2,j=1:2])\nSequence(Grad[Grad(2, 2) Grad(2, 2); Grad(2, 2) Grad(2, 2)])\n\njulia> C = A + B\nSequence(Grad[Grad(1, 1) Grad(1, 1) Grad(2, 2) Grad(2, 2); Grad(1, 1) Grad(1, 1) Grad(2, 2) Grad(2, 2)])\n\n\n\n\n\n","category":"type"},{"location":"","page":"Home","title":"Home","text":"Phantom","category":"page"},{"location":"#MRIsim.Phantom","page":"Home","title":"MRIsim.Phantom","text":"Phantom(x,y,ρ,T2,Δw,Dλ1,Dλ2,Dθ,ux,uy)\n\nPhantom object.\n\nArguments\n\nname::String := Name of the Phantom\nx            := Spins x-coordinates.\ny            := Spins y-coordinates.\nz            := Spins z-coordinates.\nρ::Matrix    := Proton density.\nT1::Matrix   := T1 map.\nT2::Matrix   := T2 map.\nΔw::Matrix   := Off-resonace map;\nD::Matrix    := Diffusion model.\nux::Function := Displacement field x.\nuy::Function := Displacement field y.\nuz::Function := Displacement field z.\n\n\n\n\n\n","category":"type"},{"location":"","page":"Home","title":"Home","text":"MRIsim.Spinor","category":"page"},{"location":"#MRIsim.Spinor","page":"Home","title":"MRIsim.Spinor","text":"Spinor(α,β)\n\nSpinor(α,β) with Cayley-Klein parameters α and β.\n\nBased on \"Introduction to the Shinnar-Le Roux algorithm\", Patrick Le Roux (1995).\n\nA spinor is a way to represent 3D rotations, the underlying representation is a 2 X 2 complex unitary matrix (alphabetainmathbbC):\n\nR=leftbeginarraycc\nalpha  -beta^*\nbeta  alpha^*\nendarrayright\n\nwith alpha^2+beta^2 = 1.\n\nThis later operates on the 2times2 representation of (xyz) as follows V^+ = R V R^*.\n\n\n\n\n\n","category":"type"}]
}
