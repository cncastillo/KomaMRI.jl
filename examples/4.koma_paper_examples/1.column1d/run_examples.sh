#!/bin/bash
echo "### JEMRIS ###"
mpirun -np 4 pjemris ./jemris/run.xml
echo "### KOMA ###"
julia --project=/home/ccp/Documents/Koma.jl/ ./koma/run.jl
echo "### END ###"

