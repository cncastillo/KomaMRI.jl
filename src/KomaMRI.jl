module KomaMRI

# IMPORT PACKAGES
using Reexport
@reexport using KomaMRICore
@reexport using KomaMRIFiles
@reexport using KomaMRIPlots
import KomaMRICore: update_blink_window_progress!

# GUI
using Blink, Interact, AssetRegistry, Blink.AtomShell
using Sockets: @ip_str
using Blink.AtomShell: port, inspector, try_connect, electron, initcbs, mainjs
using MAT

# Reconstruction
using FFTW: fftshift, ifftshift, fft, ifft
include("reconstruction/Recon.jl")

# MRIReco
using MRIReco
@reexport using MRIReco: reconstruction

#GUI

include("ui/UnsafeBlink.jl")
using .MacroUnsafeBlink
include("ui/ExportMATFunctions.jl")
include("ui/ExportUIFunctions.jl")
include("KomaUI.jl")

# Export the UI and the observables
export KomaUI
export sys_ui, seq_ui, obj_ui, raw_ui, img_ui


end
